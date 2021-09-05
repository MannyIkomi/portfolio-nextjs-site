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
  grid,
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
import { RichText } from "prismic-reactjs"
import { DebugDataPre } from "../components/DebugDataPre"
import { ReactSVG } from "react-svg"
import { SocialIcon } from "../components/SocialIcon"

// console.clear()

const IndexPage = ({ data }) => {
  const projects = data.allPrismicProject.nodes
  const about = data.prismicAbout.data
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

  const typesetAnimationStyle = [
    CODE_TYPE,
    typesetAnimation({
      color: colors.ACCENT,
      animationDelay: "2s",
    }),
  ]
  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I design comprehensive user experiences driven by thoughtful visual language.`}
      />

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
            backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
          }}
        >
          <ContainerWidth
            css={{
              ...flex("column"),
              justifyContent: "space-around",
              ...onTabletMedia({ maxWidth: "75%" }),
            }}
          >
            <figure
              css={{
                ...grid({
                  gridTemplateColumns: "2rem 1fr",
                  alignItems: "center",
                  gridGap: "1rem",
                }),
                margin: "1rem 0",
              }}
            >
              <img
                css={{
                  width: "2rem",
                  height: "auto",
                  borderRadius: "100%",
                }}
                width={about.photo.dimensions.width}
                height={about.photo.dimensions.height}
                src={about.photo.fluid.src}
                srcSet={about.photo.fluid.srcSet}
                sizes={about.photo.fluid.sizes}
                alt={about.photo.alt}
              />
              <figcaption
                css={{
                  lineHeight: 1,
                  width: "100%",
                  color: colors.PRIMARY,
                }}
              >
                <span css={{ fontWeight: "bold" }}>Manny Ikomi</span>
                <br />
                <span>{about.role}</span>
              </figcaption>
            </figure>
            <div
              css={{
                ...grid({
                  gridTemplateColumns: "2rem 1fr",
                  alignItems: "center",
                  gridGap: "1rem",
                }),
              }}
            >
              <h1
                css={[
                  {
                    gridColumn: "2/3",
                    ...SANS_TYPE,
                    color: colors.PRIMARY,
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
                <span css={typesetAnimationStyle}>user</span>{" "}
                <span css={typesetAnimationStyle}>experiences</span> driven by
                thoughtful <span css={typesetAnimationStyle}>visual</span>{" "}
                <span css={typesetAnimationStyle}>language</span>.
              </h1>
              {/* <div
                css={[
                  {
                    display: "none",
                  },
                  onTabletMedia({
                    display: "grid",
                    gridColumn: "2/3",
                  }),
                ]}
              >
                <RichText render={about.bio.raw} />
              </div> */}
              <div
                css={{
                  gridColumn: "1/2",
                  gridRow: "1/2",
                  alignSelf: "end",
                }}
              >
                <div
                  // background motif
                  css={{
                    position: "absolute",
                    bottom: "-20%",
                    left: "-20%",
                    width: "100%",
                    height: "100%",

                    opacity: 0.33,

                    backgroundImage: `url(${TypeMotif})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "40%",
                  }}
                ></div>

                <img
                  css={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    border: `solid 0.5rem ${colors.YELLOW}`,
                  }}
                  srcSet={about.photo.fluid.srcSet}
                  width={about.photo.dimensions.width}
                  height={about.photo.dimensions.height}
                  alt={about.photo.alt}
                />
              </div>
              <div css={{ h3: { color: colors.MID_BLUE } }}>
                <RichContentSlice primary={{ rich_text: about.title }} />
                <RichContentSlice primary={{ rich_text: about.bio }} />
              </div>
            </ContainerWidth>
          </SectionBlock>
        </main>
        <Footer />
      </StickyScrollContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicQuery {
    allPrismicProject(sort: { fields: data___date, order: DESC }) {
      nodes {
        id
        uid
        data {
          date
          description
          subtitle
          title {
            text
          }
          cover_image {
            fluid {
              srcSet
              src
              sizes
            }
            alt
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
    prismicAbout {
      data {
        role
        photo {
          alt
          dimensions {
            height
            width
          }
          fluid {
            srcSet
            sizes
            src
          }
        }
        bio {
          raw
          text
        }
        title {
          raw
          text
        }
      }
    }
    allPrismicSocials {
      nodes {
        data {
          call_to_action
          label
          url {
            url
          }
        }
      }
    }
  }
`

export default IndexPage
