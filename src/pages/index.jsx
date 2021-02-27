/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"
import smoothscroll from "smoothscroll-polyfill"

import {
  supportsGrid,
  onMediaWidth,
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  onMedia,
  PROJECT_SHADOW,
  FUTURA_BODY_SIZE,
  styleTransition,
  onDesktopMedia,
  maxLineMeasure,
  SANS_TYPE,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { DesktopMenu } from "../components/DesktopMenu"

import { ProjectTagHeading } from "../components/ProjectTagHeading"
import { SectionBreak } from "../components/SectionBreak"

// console.clear()

const IndexPage = ({ data }) => {
  const cmsProjects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && true // !feature
  )

  const [selectedProjects, setSelectedProjects] = useState(cmsProjects)
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

  const heroTypesetAnimation = (overrides = {}) => {
    const typeset = keyframes({
      from: {
        transform: "rotateX(180deg) translateY(-28%)", //translate adjusts optical baseline to the x-height when flipped
      },
      to: {
        // transform: "rotateX(0)",

        transform: "rotateX(0) translateY(0)",
        color: colors.YELLOW,
      },
    })

    return {
      display: "inline-block",
      transformOrigin: "center center",

      transform: "rotateX(180deg) translateY(-28%)",
      color: colors.orange50,

      animationName: typeset,
      animationDuration: "300ms",
      animationFillMode: "forwards",
      animationIterationCount: 1,

      ...overrides,
    }
  }
  const WEB_SECTION = "interactive"
  const IDENTITY_SECTION = "identity"

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I create thoughtful visual language that drives delightful brand experiences.`}
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
            backgroundColor: colors.darkGray,
          }}
        >
          <SectionBlock
            css={{
              minHeight: "25vh",
              padding: "1rem",
              position: "relative",
              backgroundColor: colors.NAVY_BLUE,
            }}
          >
            <ContentArea
              css={{
                ...flex("column"),
                justifyContent: "space-around",
                ...onTabletMedia({ maxWidth: "75%" }),
              }}
            >
              <h1
                css={[
                  onTabletMedia({
                    fontSize: "5vmin",
                    margin: `${TOUCH_TARGET} 0`,
                  }),

                  onDesktopMedia({
                    fontSize: "5vmin",
                  }),
                ]}
              >
                I create{" "}
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "1s" }),
                  ]}
                >
                  thoughtful&nbsp;
                </span>
                visual language that drives{" "}
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "2s" }),
                  ]}
                >
                  delightful&nbsp;
                </span>
                brand experiences.
              </h1>
            </ContentArea>
          </SectionBlock>
          {feature.length > 0 && (
            <>
              <SectionBreak id={"feature"} />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                  minHeight: "50vh",
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Featured Work</ProjectTagHeading>
                  {feature.map(project => (
                    <Link
                      to={"/" + project.slug} /* css={{ display: "block" }} */
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
                          // img: {},
                          ...styleTransition(),
                          ...onMediaWidth(
                            "800px",
                            supportsGrid({
                              margin: 0,
                              gridTemplateColumns: "1fr 1fr",
                              gridGap: `calc(${TOUCH_TARGET} / 2)`,
                            })
                          ),
                          ...onMedia("hover: hover", {
                            "&:hover": {
                              // boxShadow:
                              // img: {
                              ...styleTransition(),
                              transform: "scale(1.025)",
                              transformOrigin: "center",
                              // },
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
                            color: colors.muteGray,
                            marginTop: "1rem",
                          }}
                        >
                          <h3
                            css={{
                              ...SANS_HEADING,
                              color: colors.muteGray,
                              ...FUTURA_BODY_SIZE,
                              textTransform: "initial",
                            }}
                          >
                            {project.title}
                          </h3>
                          <h4
                            css={{
                              color: colors.orange,
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
                </ContentArea>
              </SectionBlock>
            </>
          )}
          {/* WEB DESIGN  */}
          {webProjects.length > 0 && (
            <>
              <SectionBreak id={WEB_SECTION} />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Web Design</ProjectTagHeading>

                  <Gallery>
                    {webProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
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
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Identity Design</ProjectTagHeading>

                  <Gallery>
                    {identityProjects
                      .filter(project => !project.feature)
                      .map(project => (
                        <ProjectCover {...project} key={project.id} />
                      ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}
          <SectionBlock css={{ minHeight: "100vh" }}>
            {/* CONTACT SECTION */}
            <ContentArea
              css={{
                ...flex("column"),
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <h2>Get In Touch</h2>
              <ul
                css={{
                  listStyle: "none",
                  ...flex("column"),
                  alignItems: "center",
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

                          fontWeight: 500,
                          lineHeight: 1,
                          textTransform: "uppercase",
                          textDecoration: "none",
                          color: colors.TURQUOISE,

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
              <button
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
              </button>
            </ContentArea>
          </SectionBlock>

          <SectionBlock
            css={[
              {
                backgroundColor: colors.TURQUOISE,
                minHeight: "100vh",
                color: colors.LIGHT_GRAY,
              },
              onTabletMedia({
                minHeight: "50vh",
                ...supportsGrid({
                  gridGap: "1rem",
                  gridTemplateColumns: "repeat(12, 1fr)",
                }),
              }),
            ]}
          >
            <QuoteBlock
              cite={"Massimo Vignelli"}
              css={{ textAlign: "left", gridColumn: "2 / 12" }}
            >
              Styles come and go. Good design is a language, not a style.
            </QuoteBlock>
          </SectionBlock>
        </main>
      </StickyScrollContainer>

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
