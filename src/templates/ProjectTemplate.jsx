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
  imageCaption,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { Footer } from "../components/Footer"

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
  LINK,
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
    case LINK:
      return <LinkModule {...slice} key={slice.id} />
    case RICH_TEXT:
      return <RichContentSlice {...slice} key={slice.id} />

    default:
      return (
        <div css={{ backgroundColor: "red" }}>
          Could not find matching Component for Slice:{" "}
          {slice.slice_type || slice.type}
        </div>
      )
  }
}

const ProjectTemplate = ({ data, site }) => {
  console.log(data)
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
        css={{
          "::before": {
            content: '""',
            display: "block",
            width: "100%",
            maxHeight: MENUBAR_HEIGHT,
          },
        }}
      >
        <StickyMenuBar />
        <main>
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
              backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
            }}
          >
            <header
              css={[
                {
                  color: colors.PRIMARY,
                  ...flex("row"),
                  alignItems: "center",
                  minHeight: "50vh",
                  padding: "0 1rem",
                },
                onTabletMedia({
                  minHeight: "33vh",
                  padding: 0,
                }),
              ]}
            >
              <ContainerWidth>
                <h1>{title}</h1>
                <h2
                  css={{
                    color: colors.ACCENT,
                  }}
                >
                  {subtitle}
                </h2>
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
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  #project has slug

  query($id: String!) {
    #gets the single requested project data for viewing
    prismicProject(id: { eq: $id }) {
      id
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
          ... on PrismicProjectBodyFullWidthImage {
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
              }
              image_caption
            }
          }
          ... on PrismicProjectBodyRichText {
            id
            slice_type
            primary {
              rich_text {
                raw
                text
              }
            }
          }
          ... on PrismicProjectBodyAccordians {
            id
            items {
              accordion_details {
                raw
                text
              }
              accordion_summary
            }
            slice_type
            primary {
              accordion_section_title {
                raw
                text
                html
              }
            }
          }
          ... on PrismicProjectBodyImageGallery {
            id
            slice_type
            primary {
              gallery_title {
                text
                raw
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
              }
            }
          }
          ... on PrismicProjectBodyInlineImage {
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
              }
              caption
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
