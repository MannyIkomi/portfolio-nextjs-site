/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"

import {
  supportsGrid,
  MENUBAR_HEIGHT,
  onMediaWidth,
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  menuLink,
  onMedia,
  PROJECT_SHADOW,
  styleTransition,
  DESKTOP_VIEWPORT,
  onDesktopMedia,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { LogoMaster } from "../components/logo"
import { TypesetLink } from "../components/TypesetLink"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { SocialIcon } from "../components/SocialIcon"
import { useSocialMedia } from "../hooks/useSocialMedia"

const IndexPage = ({ data }) => {
  const socialMedia = useSocialMedia()
  const projects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && !feature
  )
  const feature = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && feature
  )
  const identityProjects = projects.filter(project =>
    project.tags.some(({ design }) => design === "Identity")
  )
  const otherProjects = projects.filter(project =>
    project.tags.every(({ design }) => design !== "Identity")
  )

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
        <nav
          id={"desktop"}
          css={{
            boxShadow: "0.25rem 0.25rem 1rem 0px rgba(0,0,0,0.5)",
            width: "10rem",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
            padding: "1rem",

            ...flex("column"),
            alignItems: "center",
          }}
        >
          <LogoMaster
            css={{
              minWidth: TOUCH_TARGET,
              textAlign: "center",
              width: "50%",
              margin: "25%",
              svg: {
                ...styleTransition(),
                fill: colors.darkGray,
              },

              // margin: "2rem 0",
            }}
          />
          {[
            ["Work", "/"],
            ["About", "/about"],
            ["Resume", "/resume"],
          ].map(([label, path]) => (
            <TypesetLink
              css={[
                menuLink,
                {
                  display: "block",
                  // alignSelf: "flex-end",
                  margin: `1rem 0`,
                  padding: `0.25rem`,

                  ...SANS_HEADING,
                  textTransform: "uppercase",
                },
              ]}
              to={path}
            >
              {label}
            </TypesetLink>
          ))}

          <div
            css={{
              ...flex("row"),
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: "25% 0",
            }}
          >
            {socialMedia.map(social => (
              <SocialIcon
                key={social.platform}
                {...social}
                css={{
                  svg: { fill: colors.darkGray },

                  minWidth: "initial",
                  width: "25%",
                  // maxWidth: TOUCH_TARGET,
                }}
              />
            ))}
          </div>
        </nav>

        <StickyMenuBar />

        <main
          css={{
            width: "100%",
            backgroundColor: colors.darkGray,
          }}
        >
          <SectionBlock
            css={{
              backgroundColor: colors.darkGray,
              minHeight: "100vh",
            }}
          >
            <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
              <h1 css={{ textAlign: "right", marginBottom: "1rem" }}>
                Featured Work
              </h1>

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
                          fontSize: "1.33rem",
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
                        {project.tags.map(({ design }) => `#${design}`)}
                      </TokenList>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </ContentArea>
          </SectionBlock>

          {/* <hr css={{ borderColor: colors.darkGray50, margin: TOUCH_TARGET }} /> */}
          {identityProjects.length > 0 && (
            <SectionBlock
              css={{
                backgroundColor: colors.darkGray,
              }}
            >
              <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                <h1 css={{ textAlign: "right", marginBottom: "1rem" }}>
                  Identity Design
                </h1>

                <Gallery>
                  {identityProjects.map(project => (
                    <ProjectCover {...project} key={project.id} />
                  ))}
                </Gallery>
              </ContentArea>
            </SectionBlock>
          )}
          <SectionBlock
            css={{
              backgroundColor: colors.darkGray,
            }}
          >
            <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
              <h1 css={{ textAlign: "right", marginBottom: "1rem" }}>
                other work
              </h1>

              <Gallery
              // css={{
              //   ".project-cover": {
              //     marginBottom: TOUCH_TARGET,
              //   },
              //   ...onTabletMedia({
              //     ".project-cover": {
              //       marginBottom: 0,
              //     },
              //   }),
              // }}
              >
                {otherProjects.map(project => (
                  <ProjectCover {...project} key={project.id} />
                ))}
              </Gallery>
            </ContentArea>
          </SectionBlock>

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
