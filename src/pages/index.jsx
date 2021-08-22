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
import { ReactSVG } from "react-svg"

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
        // project={feature[0]}
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
                src={about.photo.url}
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
                <span>Student, Product Designer</span>
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
              <p
                css={[
                  {
                    display: "none",
                  },
                  onTabletMedia({
                    display: "intital",
                  }),
                ]}
              >
                <RichText render={about.bio.raw} />
              </p>
              <div
                css={{
                  gridColumn: "1/2",
                }}
              >
                {socials
                  // .filter(platform => platform.label == "LinkedIn")
                  .map(linkedIn => {
                    return (
                      <a
                        href={linkedIn.url.url}
                        css={{
                          color: colors.ACCENT,
                        }}
                      >
                        <ReactSVG
                          src={linkedIn.icon.url}
                          css={{ svg: { fill: "currentcolor" } }}
                        />
                      </a>
                    )
                  })}
              </div>
            </div>
          </ContainerWidth>
        </SectionBlock>

        {projects.length > 0 && (
          <>
            <SectionBlock
              css={{
                backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
              }}
            >
              <ContainerWidth css={{ padding: "1rem" }}>
                {/* <ProjectTagHeading>Identity Design</ProjectTagHeading> */}
                <ProjectList>
                  {projects
                    // .filter(project => !project.feature)
                    .map(project => (
                      <ProjectCover
                        {...project}
                        css={maxTypeWidth}
                        key={project.id}
                      />
                    ))}
                </ProjectList>
              </ContainerWidth>
            </SectionBlock>
          </>
        )}
      </main>

      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicQuery {
    allPrismicProject(sort: { fields: data___date, order: DESC }) {
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
