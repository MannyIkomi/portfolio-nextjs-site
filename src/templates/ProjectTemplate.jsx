/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  MENUBAR_HEIGHT,
  flex,
  colors,
  TOUCH_TARGET,
  onTabletMedia,
  onMedia,
  onSupport,
  onDesktopMedia,
  SANS_TYPE,
  maxTypeWidth,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { Footer } from "../components/Footer"

// Refactor Modules into Prismic Slices
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { InteractiveModule } from "../components/InteractiveModule"
import { LinkModule } from "../components/LinkModule"
import { TextModule } from "../components/TextModule"

import { ProjectCover } from "../components/ProjectCover"
import { SectionBlock } from "../components/SectionBlock"
import { ColorOverprint } from "../components/FillOverlay"
import { TokenList } from "../components/TokenList"
import Markdown from "../components/Markdown"
import { useEffect, useState } from "react"
import {
  CAPTION,
  IMAGE,
  INTERACTIVE,
  INTRO,
  LINK,
  TEXT,
} from "../util/moduleTypes"

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
          {JSON.stringify(thisProject, null, 2)}
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
              backgroundColor: colors.LIGHT_GRAY,
            }}
          >
            <header>
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
