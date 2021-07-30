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

function switchSliceToComponent(slice) {
  switch (slice.slice_type || slice.type) {
    case FULL_IMAGE:
    case INLINE_IMAGE:
      return <ImageSlice {...slice} key={slice.id} />
    case RICH_TEXT:
      return <RichContentSlice {...slice} key={slice.id} />
    case ACCORDIAN:
      return <AccordianSlice {...slice} key={slice.id} />
    case IMAGE_GALLERY:
      return (
        <section css={{ color: colors.PRIMARY, ...maxTypeWidth }}>
          {/* <pre css={{ overflow: "hidden" }}>
            {JSON.stringify(slice, null, 2)}
          </pre> */}
          <div css={{ ...maxTypeWidth }}>
            {slice.primary.gallery_title.map(switchRichContentToComponent)}
          </div>
          <div
            css={[
              {
                // progressive enhance from single column vertical scroll
                width: "100%",

                // maxWidth: "100vw",
                // padding: "2rem",
              },
            ]}
          >
            <div
              css={[
                {
                  overflowX: "scroll",
                  ...flex("row"),
                  flexWrap: "nowrap",
                  justifyContent: "initial",
                },
              ]}
            >
              {slice.items.map(photo => (
                <figure
                  key={photo.url}
                  css={{
                    margin: "0 1rem",
                  }}
                >
                  <img
                    css={{
                      minWidth: "15rem",

                      width: "100%",
                      height: "auto",
                      maxWidth: "66vw",
                    }}
                    alt={photo.image.alt}
                    src={photo.image.url}
                    width={photo.image.dimensions.width}
                    height={photo.image.dimensions.height}
                  />
                  <figcaption css={[imageCaption]}>
                    {photo.image_caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )
    case LINK:
      return <LinkModule {...slice} key={slice.id} />

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
  const thisProject = data.prismicProject.data
  const slug = data.prismicProject.slugs[0]

  const { title, cover_image, description, subtitle, tags, body } = thisProject

  return (
    <Layout>
      <HtmlHead
        title={`${title[0].text}: ${subtitle}`}
        description={description}
        project={thisProject}
        path={`/${slug}`}
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
                <h1>{title[0].text}</h1>
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

  query($slug: String!) {
    #gets the single requested project data for viewing
    prismicProject(slugs: { eq: $slug }) {
      slugs
      data {
        body {
          slice_type
          primary {
            caption
            image {
              alt
              url
              dimensions {
                height
                width
              }
            }
            rich_text {
              text
              spans {
                start
                end
                type
              }
              type
              url
              alt
              dimensions {
                height
                width
              }
            }
            image_caption
            gallery_title {
              text
              type
            }
            accordion_section_title {
              text
              type
            }
          }
          items {
            image_caption
            accordion_summary
            image {
              url
              alt
              dimensions {
                height
                width
              }
            }
            accordion_details {
              alt
              dimensions {
                height
                width
              }
              text
              type
              url
            }
          }
        }
        tags {
          label
        }
        cover_image {
          url
          alt
        }
        title {
          text
          type
        }
        subtitle
        description
        link {
          url
          link_type
        }
      }
    }
  }
`

export default ProjectTemplate
