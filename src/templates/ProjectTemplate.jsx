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
                <h1
                  css={{
                    //styleName: DesktopH1Title;

                    fontFamily: "Fira Code",
                    fontSize: "72px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "86px",
                    letterSpacing: "-0.05em",
                    textAlign: "left",

                    fontWeight: "light",
                  }}
                >
                  {title[0].text}
                </h1>
                <h2
                  css={{
                    //styleName: 'DesktopSubtitle',
                    fontFamily: "Fira Sans",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "43px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  {subtitle}
                </h2>

                <TokenList>{tags.map(tag => tag.label)}</TokenList>
              </ContainerWidth>
            </header>
            <div>
              {body.map(slice => {
                switch (slice.slice_type) {
                  case INTRO:
                    break
                  case TEXT:
                    return <TextModule {...slice} key={slice.id} />
                  case IMAGE:
                    return <ImageModule {...slice} key={slice.id} />
                  case CAPTION:
                    return <CaptionModule {...slice} key={slice.id} />
                  case INTERACTIVE:
                    return <InteractiveModule {...slice} key={slice.id} />
                  case LINK:
                    return <LinkModule {...slice} key={slice.id} />
                  // case SECTION:
                  // use to split
                  //   return <div>CREATE SECTION MODULE</div> with glyph
                  default:
                    return
                    throw new Error(
                      `Could not find matching Component for Slice: ${slice.type}`
                    )
                }
              })}
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
            rich_text {
              text
            }
            caption
          }
        }
        tags {
          label
        }
        title {
          text
        }
        subtitle
        description
        cover_image {
          url
          alt
        }
      }
    }
  }
`

export default ProjectTemplate
