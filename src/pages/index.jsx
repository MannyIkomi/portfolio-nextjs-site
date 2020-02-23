/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"

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
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { DesktopMenu } from "../components/DesktopMenu"

export const ProjectTagHeading = ({ children, ...restProps }) => {
  return (
    <h1 css={{ textAlign: "right", marginBottom: "1rem" }} {...restProps}>
      {children}
    </h1>
  )
}

export const SectionBreak = props => <hr css={{ margin: "5vh", border: 0 }} />

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => /* !draft && */ true // !feature
  )
  const feature = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && feature
  )
  const identityProjects = projects.filter(project =>
    project.tags.some(({ design }) => design === "Identity")
  )
  const interactiveProjects = projects.filter(project =>
    project.tags.some(({ design }) => design === "Interactive")
  )
  const otherProjects = projects.filter(project =>
    project.tags.every(
      ({ design }) => design !== "Identity" && design !== "Interactive"
    )
  )

  const heroTypesetAnimation = (overrides = {}) => {
    const typeset = keyframes({
      from: {
        // transform: "rotateX(180deg)",
        transform: "rotateX(180deg) translateY(-0.66rem)",
      },
      to: {
        // transform: "rotateX(0)",

        transform: "rotateX(0) translateY(0)",
        color: colors.orange,
      },
    })

    return {
      display: "inline-block",
      transformOrigin: "center center",

      transform: "rotateX(180deg) translateY(-0.66rem)",
      color: colors.orange50,

      animationName: typeset,
      animationDuration: "300ms",
      animationFillMode: "forwards",
      animationIterationCount: 1,

      ...overrides,
    }
  }

  return (
    <Layout>
      <HtmlHead
        title="Portfolio Projects"
        description={
          "A collection of Manny Ikomi's design portfolio work, including identity design, typography, web design, branding, and logo design"
        }
      />
      <StickyScrollContainer
        css={[
          {
            "#mobile": flex("row"),
            "#desktop": { display: "none" },
          },
          onDesktopMedia({
            ...flex("row"), // puts desktop <nav> on the left of <main>
            "#mobile": { display: "none" },
            "#desktop": flex("column"),
          }),
          ,
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
          <SectionBlock css={{ minHeight: "25vh", padding: "1rem" }}>
            <h1>
              I create{" "}
              {/* <span
                css={[
                  {
                    font: "inherit",
                  },
                  heroTypesetAnimation({ animationDelay: "1s" }),
                ]}
              >
                intentional–
              </span> */}
              <span
                css={[
                  { font: "inherit" },
                  heroTypesetAnimation({ animationDelay: "1s" }),
                ]}
              >
                thoughtful
              </span>
              —
              <span
                css={[
                  { font: "inherit" },
                  heroTypesetAnimation({ animationDelay: "2s" }),
                ]}
              >
                clear&nbsp;
              </span>
              visual language that drives delightful experiences.
            </h1>
            {/* <br />
              <p>Are you looking for?</p>
              <select name="projects" id="projects">
                <option value="interactive">Web & UI Design</option>
                <option value="identity">Identity & Logo Design</option>
                <option value="print">Print & Editorial Design</option>
                <option value="all">Just Impress Me!</option>
              </select> */}
          </SectionBlock>

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
                      img: {},
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
                        // ...onMediaWidth(
                        //   "800px",

                        //   { padding: "1rem" }
                        // ),
                      }}
                    >
                      <h1
                        css={{
                          ...SANS_HEADING,
                          color: colors.muteGray,
                          ...FUTURA_BODY_SIZE,
                          textTransform: "initial",
                        }}
                      >
                        {project.title}
                      </h1>
                      <h2
                        css={{
                          color: colors.orange,
                          fontSize: "2rem",
                          fontStyle: "italic",

                          textTransform: "initial",
                        }}
                      >
                        {project.subtitle}
                      </h2>
                      <p css={{ textDecoration: "none" }}>
                        {project.seoDescription}
                      </p>

                      <TokenList>
                        {project.tags.map(({ design }) => `${design}`)}
                      </TokenList>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </ContentArea>
          </SectionBlock>
          <SectionBreak />
          {/* INTERACTIVE DESIGN SECTION */}
          {interactiveProjects.length > 0 && (
            <SectionBlock
              css={{
                backgroundColor: colors.darkGray,
              }}
            >
              <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                <ProjectTagHeading>Interactive Design</ProjectTagHeading>

                <Gallery>
                  {interactiveProjects.map(project => (
                    <ProjectCover {...project} key={project.id} />
                  ))}
                </Gallery>
              </ContentArea>
            </SectionBlock>
          )}

          {identityProjects.length > 0 && (
            <>
              <SectionBreak />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Identity Design</ProjectTagHeading>

                  <Gallery>
                    {identityProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}
          <SectionBreak />
          {otherProjects.length > 0 && (
            <>
              <SectionBreak />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <h1 css={{ textAlign: "right", marginBottom: "1rem" }}>
                    other work
                  </h1>

                  <Gallery>
                    {otherProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}
          {/* 
          <SectionBlock
            css={{
              backgroundColor: colors.muteGray,
              color: colors.darkGray,
            }}
          >
            <h1 css={{ textAlign: "right" }}>Fun with code</h1>
            experimental section
          </SectionBlock> */}
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
