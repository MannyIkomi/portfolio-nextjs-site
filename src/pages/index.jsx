/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
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
  const cmsProjects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && true // !feature
  )

  const [selectedProjects, setSelectedProjects] = useState(cmsProjects)
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

  // group project sections by category
  const feature = selectedProjects.filter(
    ({ draft, feature }) => !draft && feature
  )
  const webProjects = selectedProjects.filter(project =>
    project.tags.some(({ design }) => design === "Interactive")
  )
  const identityProjects = selectedProjects.filter(project =>
    project.tags.some(({ design }) => design === "Identity")
  )
  // const graphicProjects = selectedProjects.filter(project =>
  //   project.tags.every(
  //     ({ design }) => design !== "Identity" && design !== "Interactive"
  //   )
  // )

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I design comprehensive brand experiences driven by thoughtful visual language.`}
        project={feature[0]}
      />
      <StickyScrollContainer
        css={[
          {
            "#mobile": flex("row"), // show StickyMenuBar
            "#desktop": { display: "none" },
          },
          onDesktopMedia({
            ...flex("row"), // puts desktop <nav> on the left of <main>
            "#mobile": { display: "none" },
            "#desktop": flex("column"), // show DesktopMenu
          }),
        ]}
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
                  brand experiences
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
          {feature.length > 0 && (
            <>
              <SectionBlock
                css={{
                  backgroundColor: colors.NAVY_BLUE,
                  minHeight: "50vh",
                }}
              >
                <ContainerWidth css={{ ...maxContainerWidth, padding: "1rem" }}>
                  {feature.map(project => (
                    <Link
                      to={"/" + project.slug}
                      className={"project-cover"}
                      css={{
                        display: "block",
                        ...flex("column"),
                        justifyContent: "center",
                        marginBottom: TOUCH_TARGET,
                        ...onTabletMedia({
                          margin: "1rem",
                          marginBottom: TOUCH_TARGET,
                        }),
                      }}
                      key={project.id}
                    >
                      <figure
                        css={{
                          ...styleTransition(),
                          ...onMediaWidth(
                            "800px",
                            supportsGrid({
                              display: "grid",
                              margin: 0,
                              gridTemplateColumns: "1fr 1fr",
                              gridGap: `calc(${TOUCH_TARGET} / 2)`,
                            })
                          ),
                          ...onMedia("hover: hover", {
                            "&:hover": {
                              ...styleTransition(),
                              transform: "scale(1.025)",
                              transformOrigin: "center",
                            },
                          }),
                        }}
                      >
                        <ProjectPhoto
                          css={{ boxShadow: PROJECT_SHADOW }}
                          {...project.cover.childImageSharp.fluid}
                        />
                        <figcaption
                          css={{
                            ...flex("column"),
                            justifyContent: "flex-end",
                            color: colors.LIGHT_GRAY,
                            marginTop: "1rem",
                          }}
                        >
                          <h3
                            css={{
                              ...CODE_TYPE,
                              color: colors.LIGHT_GRAY_FOREGROUND,

                              textTransform: "initial",
                            }}
                          >
                            {project.title} =>
                          </h3>
                          <h4
                            css={{
                              ...SANS_TYPE,
                              color: colors.YELLOW,
                              fontSize: "2rem",
                              fontStyle: "italic",

                              textTransform: "initial",
                            }}
                          >
                            {project.subtitle}
                          </h4>
                          <p css={{ textDecoration: "none" }}>
                            {project.seoDescription}
                          </p>

                          <TokenList>
                            {project.tags.map(
                              ({ design, detail }) => detail || design
                            )}
                          </TokenList>
                        </figcaption>
                      </figure>
                    </Link>
                  ))}
                </ContainerWidth>
              </SectionBlock>
            </>
          )}
          {webProjects.length > 0 && (
            <>
              <SectionBlock
                css={{
                  backgroundColor: colors.NAVY_BLUE,
                }}
              >
                <ContainerWidth css={{ padding: "1rem" }}>
                  <ProjectTagHeading>Web Design</ProjectTagHeading>

                  <ProjectList>
                    {webProjects.map(project => (
                      <ProjectCover
                        {...project}
                        key={project.id}
                        css={maxTypeWidth}
                      />
                    ))}
                  </ProjectList>
                </ContainerWidth>
              </SectionBlock>
            </>
          )}
          {identityProjects.length > 0 && (
            <>
              <SectionBlock
                css={{
                  backgroundColor: colors.NAVY_BLUE,
                }}
              >
                <ContainerWidth css={{ padding: "1rem" }}>
                  <ProjectTagHeading>Identity Design</ProjectTagHeading>

                  <ProjectList>
                    {identityProjects
                      .filter(project => !project.feature)
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
          <SectionBlock css={{ minHeight: "50vh" }}>
            {/* CONTACT SECTION */}
            <ContainerWidth
              css={{
                ...flex("column"),
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <h2 css={{ color: colors.NAVY_BLUE }}>Contact Me</h2>
              <ul
                css={{
                  listStyle: "none",
                  ...flex("column"),
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {socials
                  .filter(
                    ({ platform }) =>
                      platform === "Twitter" || platform === "LinkedIn"
                  )
                  .map(({ platform, href }) => (
                    <li key={platform}>
                      <TypesetLink
                        css={{
                          padding: "0.75rem",
                          border: `0.25rem solid ${colors.TURQUOISE}`,
                          whiteSpace: "nowrap",

                          fontWeight: 700,
                          lineHeight: 1,
                          textTransform: "uppercase",
                          textDecoration: "none",
                          color: colors.TURQUOISE,

                          marginTop: "3vh",

                          ...onHover({
                            backgroundColor: colors.TURQUOISE,
                            color: colors.LIGHT_GRAY_FOREGROUND,
                          }),
                        }}
                        to={href}
                      >
                        {platform === "Twitter" && "DM on "}
                        {platform === "LinkedIn" && "Connect on "}
                        {platform} ->
                      </TypesetLink>
                    </li>
                  ))}
              </ul>
              {/* <button
                onClick={e => console.log(e)}
                css={{
                  ...styleTransition(),
                  ...hoverTypesetTransform({ color: colors.NAVY_BLUE }),
                  padding: "1.5rem",
                  backgroundColor: colors.YELLOW,

                  ...CODE_TYPE,
                  color: colors.NAVY_BLUE,
                  lineHeight: 1,
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                Email Me =>
              </button> */}
            </ContainerWidth>
          </SectionBlock>
        </main>
      </StickyScrollContainer>
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
  query IndexQuery {
    # add {completed} field to keep rendering in chronological order
    allStrapiProjects(
      sort: { fields: completed, order: DESC }
      filter: { private: { eq: false } }
    ) {
      nodes {
        id
        coverAlt
        title
        subtitle
        slug
        draft
        feature
        seoDescription
        tags {
          design
          detail
        }
        # private filtered out of query entirely
        cover {
          publicURL
          childImageSharp {
            fluid(quality: 75, maxWidth: 1024, toFormat: JPG) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default IndexPage
