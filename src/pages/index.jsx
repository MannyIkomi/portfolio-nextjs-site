/** @jsx jsx */
import { jsx } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { ProjectList } from "../components/ProjectList"
import { Footer } from "../components/Footer"
import smoothscroll from "smoothscroll-polyfill"

import {
  supportsGrid,
  onMediaWidth,
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  flex,
  onMedia,
  PROJECT_SHADOW,
  styleTransition,
  onDesktopMedia,
  maxReadingWidth,
  SANS_TYPE,
  typography,
  CODE_TYPE,
  onHover,
  grid12Columns,
  maxContainerWidth,
  onSupport,
  maxTypeWidth,
  typesetAnimation,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { DesktopMenu } from "../components/DesktopMenu"

import { ProjectTagHeading } from "../components/ProjectTagHeading"
import { SectionBreak } from "../components/SectionBreak"
import { QuoteBlock } from "../components/QuoteBlock"
import { useSocialMedia } from "../hooks/useSocialMedia"
import { TypesetLink } from "../components/TypesetLink"
import { List } from "../components/List"

// console.clear()

const IndexPage = ({ data }) => {
  const projects = data.allPrismicProject.nodes

  const socials = useSocialMedia()
  const [scrollId, setScrollId] = useState("")

  const useScrollToId = elementId => {
    useEffect(() => {
      if (typeof document !== "undefined" && elementId) {
        // https://github.com/iamdustan/smoothscroll
        smoothscroll.polyfill()

        const elementArea = document.getElementById(elementId).getClientRects()
        window.scroll({
          top: elementArea[0].top,
          behavior: "smooth",
        })
      }
    })
  }

  useScrollToId(scrollId)

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I design comprehensive user experiences driven by thoughtful visual language.`}
        // project={feature[0]}
      />
      >
        <DesktopMenu />
        <StickyMenuBar />
        <main
          css={{
            width: "100%",
          }}
        >
          <SectionBlock
            css={{
              minHeight: "50vh",
              padding: "1rem",
              position: "relative",
              backgroundColor: colors.NAVY_BLUE,
            }}
          >
            <ContainerWidth
              css={{
                ...flex("column"),
                justifyContent: "space-around",
                ...onTabletMedia({ maxWidth: "75%" }),
              }}
            >
              <h1
                css={[
                  {
                    ...SANS_TYPE,
                    color: colors.LIGHT_GRAY,
                    fontWeight: 100,
                  },
                  onTabletMedia({
                    fontSize: "5vmin",
                    margin: `${TOUCH_TARGET} 0`,
                  }),

                  onDesktopMedia({
                    fontSize: "5vmin",
                  }),
                ]}
              >
                I design comprehensive{" "}
                <span
                  css={[
                    CODE_TYPE,
                    typesetAnimation({
                      color: colors.YELLOW,
                      animationDelay: "1s",
                    }),
                  ]}
                >
                  user experiences
                </span>{" "}
                driven by thoughtful{" "}
                <span
                  css={[
                    CODE_TYPE,
                    typesetAnimation({
                      animationDelay: "2s",
                      color: colors.YELLOW,
                    }),
                  ]}
                >
                  visual language.
                </span>
              </h1>
            </ContainerWidth>
          </SectionBlock>
          {/* {feature.length > 0 && (
            <>
              <SectionBlock
                css={{
                  backgroundColor: colors.NAVY_BLUE,
                  minHeight: "50vh",
                }}
              >
                <RichText render={about.bio.raw} />
              </p>
              <div
                css={{
                  backgroundColor: colors.NAVY_BLUE,
                }}
              >
              css={{
                ...flex("column"),
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
      <SectionBlock
        css={[
          {
            backgroundColor: colors.TURQUOISE,
            color: colors.LIGHT_GRAY,
            padding: TOUCH_TARGET,
            ...supportsGrid({
              padding: "1rem",
            }),
          },
        ]}
      >
        <ContainerWidth
          css={{
            minHeight: "66vh",
            ...flex("column"),
            justifyContent: "center",

            ...grid12Columns({
              alignItems: "center",
            }),

            ...onTabletMedia({
              minHeight: "33vh",
            }),
          }}
        >
          <QuoteBlock
            cite={"Massimo Vignelli"}
            css={supportsGrid({ gridColumn: "2 / 12" })}
          >
            Styles come and go. Good design is a language, not a style.
          </QuoteBlock>
        </ContainerWidth>
      </SectionBlock>

      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicQuery {
    allPrismicProject {
      nodes {
        id
        data {
          date
          description
          subtitle
          title {
            text
          }
          cover_image {
            alt
            url
            dimensions {
              height
              width
            }
          }
          tags {
            label
          }
        }
      }
    }
  }
`

export default IndexPage
