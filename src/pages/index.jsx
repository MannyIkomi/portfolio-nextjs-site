/** @jsx jsx */
import { jsx } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import TypeMotif from "../../static/typemotif.png"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { ProjectList } from "../components/ProjectList"
import { Footer } from "../components/Footer"

import smoothscroll from "smoothscroll-polyfill"

import {
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  flex,
  onDesktopMedia,
  maxReadingWidth,
  SANS_TYPE,
  typography,
  CODE_TYPE,
  maxTypeWidth,
  typesetAnimation,
  grid,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"

import { ContainerWidth } from "../components/ContainerWidth"
import { SectionBlock } from "../components/SectionBlock"

import { useSocialMedia } from "../hooks/useSocialMedia"

import { RichContentSlice } from "../components/slices/RichContentSlice"

console.clear()

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
    { lineHeight: 1.2 },
    typesetAnimation({
      color: colors.ACCENT,
      animationDelay: "2s",
    }),
  ]
  return (
    <Layout>
      <StickyScrollContainer
        css={{ backgroundColor: colors.LIGHT_GRAY_FOREGROUND }}
      >
        <HtmlHead
          title="Portfolio"
          description={`I use design to take people from what-is
          to what-ought-to-be.`}
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
                    justifyItems: "center",
                    gridGap: "1rem",
                  }),
                  margin: "1rem 0",
                }}
              >
                <img
                  css={{
                    width: "3rem",
                    height: "auto",
                    borderRadius: "100%",
                  }}
                  srcSet={about.photo.fluid.srcSet}
                  width={about.photo.dimensions.width}
                  height={about.photo.dimensions.height}
                  alt={about.photo.alt}
                />
                <figcaption
                  css={{
                    lineHeight: 1,
                    width: "100%",
                    color: colors.PRIMARY,
                  }}
                >
                  <span css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                    Manny Ikomi
                  </span>
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
                  I use <span css={typesetAnimationStyle}>design</span> to take{" "}
                  <span css={typesetAnimationStyle}>people</span> from what-is,
                  to what-ought-to-be.
                </h1>
              </div>
            </ContainerWidth>
          </SectionBlock>

          {projects.length > 0 && (
            <>
              <SectionBlock
                css={{
                  overflow: "visible",
                }}
              >
                <ContainerWidth css={{ overflow: "visible" }}>
                  <ProjectList
                    css={{
                      overflow: "visible",
                      ...flex("column"),
                      alignItems: "center",
                    }}
                  >
                    {projects.map(project => (
                      <ProjectCover
                        {...project}
                        css={[maxTypeWidth, { marginBottom: "10vh" }]}
                        key={project.uid}
                      />
                    ))}
                  </ProjectList>
                </ContainerWidth>
              </SectionBlock>
            </>
          )}
          <SectionBlock css={{ minHeight: "100vh" }}>
            <ContainerWidth
              css={[
                { ...maxTypeWidth, margin: "auto" },
                onTabletMedia({
                  ...grid({
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr",
                  }),
                }),
              ]}
            >
              <div // portrait container
                css={{
                  aspectRatio: `1 / 1`,
                  position: "relative",
                  minWidth: "5rem",
                  minHeight: "5rem",
                  maxWidth: "15rem",
                  maxHeight: "15rem",
                  marginBottom: "2rem",
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
          richText
          text
        }
        title {
          richText
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
