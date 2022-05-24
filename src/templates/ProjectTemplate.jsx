/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  MENUBAR_HEIGHT,
  flex,
  colors,
  onTabletMedia,
  onMedia,
  onSupport,
  onDesktopMedia,
  CODE_TYPE,
  SANS_TYPE,
  maxTypeWidth,
  maxContainerWidth,
  grid,
  captionText,
  onMediaWidth,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { Footer } from "../components/Footer"
import { ActionLinkSlice } from "../components/slices/ActionLinkSlice"

// Refactor Modules into Prismic Slices
import { ImageSlice } from "../components/slices/ImageSlice"
import {
  RichContentSlice,
  switchRichContentToComponent,
} from "../components/slices/RichContentSlice"

import { TokenList } from "../components/TokenList"

import {
  ACCORDIAN,
  FULL_IMAGE,
  IMAGE_GALLERY,
  INLINE_IMAGE,
  ACTION_LINK,
  RICH_TEXT,
} from "../util/sliceTypes"
import { AccordianSlice } from "../components/slices/AccordianSlice"
import ImageGallerySlice from "../components/slices/ImageGallery"

function switchSliceToComponent(slice) {
  switch (slice.slice_type || slice.type) {
    case FULL_IMAGE:
    case INLINE_IMAGE:
      return <ImageSlice {...slice} key={slice.id} />
    case ACCORDIAN:
      return <AccordianSlice {...slice} key={slice.id} />
    case IMAGE_GALLERY:
      return <ImageGallerySlice {...slice} key={slice.id} />
    case ACTION_LINK:
      if (slice.primary.isBroken) {
        console.warn(
          `"${slice.primary.label}" link is broken, the link will not be rendered`,
          slice
        )
        return
      }
      return <ActionLinkSlice {...slice} key={slice.id} />
    case RICH_TEXT:
      return <RichContentSlice {...slice} key={slice.id} />

    default:
      console.warn(
        `Could not find matching Component for Slice: ${slice.slice_type ||
          slice.type}`
      )
      return (
        <div css={{ backgroundColor: "red" }}>
          Could not find matching Component for Slice:{" "}
          {slice.slice_type || slice.type}
        </div>
      )
  }
}

const ProjectTemplate = ({ data, site }) => {
  const thisProject = data.notion
  const { id, content, properties } = thisProject

  const { Role, Status, Name } = properties
  const title = Name.title[0].plain_text
  console.log(properties)

  return (
    <Layout>
      <HtmlHead
        title={`${title}`}
        // description={description}
        project={thisProject}
        path={`/${id}`}
      />
      <StickyScrollContainer
        css={{ backgroundColor: colors.LIGHT_GRAY_FOREGROUND }}
      >
        <main>
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
            }}
          >
            <header
              css={[
                {
                  color: colors.PRIMARY,
                  ...flex("row"),
                  alignItems: "center",
                  width: "100%",
                  ...maxTypeWidth,
                  margin: "2rem 0",
                  padding: "0 1rem",
                },
                onTabletMedia({
                  minHeight: "50vh",
                  minHeight: "33vh",
                  padding: 0,
                }),
              ]}
            >
              <ContainerWidth>
                <h1>{title}</h1>

                <TokenList>
                  {Role.multi_select.map(role => role.name)}
                </TokenList>
              </ContainerWidth>
            </header>
            <div
              css={[{ ...flex("column"), alignItems: "center", width: "100%" }]}
            >
              {/* {body.map(switchSliceToComponent)} */}
            </div>
          </article>
        </main>

        <Footer
          css={onMediaWidth("70rem", { position: "sticky", bottom: 0 })}
        />
      </StickyScrollContainer>
    </Layout>
  )
}

export const query = graphql`
  #project has slug
  query($uid: String!) {
    #gets the single requested project data for viewing
    notion(id: { eq: $uid }) {
      id
      content {
        object
        results {
          heading_1 {
            rich_text {
              plain_text
            }
          }
          heading_2 {
            rich_text {
              plain_text
            }
          }
          heading_3 {
            rich_text {
              plain_text
            }
          }
        }
      }
      properties {
        Status {
          select {
            name
          }
        }
        Role {
          multi_select {
            name
          }
        }
        Name {
          title {
            plain_text
          }
        }
        Link {
          url
        }
        Cover {
          files {
            file {
              url
            }
          }
        }
        Cover_Alt {
          rich_text {
            plain_text
          }
        }
      }
    }
  }
`

export default ProjectTemplate
