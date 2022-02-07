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
  firaCode,
  firaSans,
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
import { Heading } from "../components/Heading"

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
  const thisProject = data.prismicProject.data
  const id = data.prismicProject.id

  const { description, tags, body } = thisProject
  const title = thisProject.title.text
  const subtitle = thisProject.subtitle

  return (
    <Layout>
      <HtmlHead
        title={`${title}: ${subtitle}`}
        description={description}
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
                <Heading level={1}>{title}</Heading>
                <Heading
                  level={2}
                  css={{
                    color: colors.MID_BLUE,
                  }}
                >
                  {subtitle}
                </Heading>
                <TokenList>{tags.map(tag => tag.label)}</TokenList>
              </ContainerWidth>
            </header>
            <div
              css={[{ ...flex("column"), alignItems: "center", width: "100%" }]}
            >
              {body.map(switchSliceToComponent)}
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
    prismicProject(uid: { eq: $uid }) {
      id
      uid
      data {
        tags {
          label
        }
        cover_image {
          dimensions {
            height
            width
          }
          url
          alt
        }
        subtitle
        title {
          text
        }
        description
        body {
          ... on PrismicProjectDataBodyFullWidthImage {
            id
            slice_type
            primary {
              image {
                alt
                url
                dimensions {
                  height
                  width
                }
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
              image_caption
            }
          }
          ... on PrismicProjectDataBodyRichText {
            id
            primary {
              rich_text {
                richText
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicProjectDataBodyAccordians {
            id
            items {
              accordion_details {
                richText
                text
              }
              accordion_summary
            }
            slice_type
            primary {
              accordion_section_title {
                richText
                text
                html
              }
            }
          }
          ... on PrismicProjectDataBodyImageGallery {
            id
            slice_type
            primary {
              gallery_title {
                text
                richText
              }
            }
            items {
              image_caption
              image {
                alt
                url
                dimensions {
                  height
                  width
                }
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          ... on PrismicProjectDataBodyInlineImage {
            id
            slice_type
            primary {
              image {
                alt
                url
                dimensions {
                  height
                  width
                }
                fluid {
                  sizes
                  srcSet
                  src
                }
              }
              caption
            }
          }
          ... on PrismicProjectDataBodyActionLink {
            id
            primary {
              label
              url {
                isBroken
                url
              }
            }
            slice_type
          }
        }
      }
    }
  }
`

export default ProjectTemplate
