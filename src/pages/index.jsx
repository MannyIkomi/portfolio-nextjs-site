/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {
  supportsGrid,
  MENUBAR_HEIGHT,
  onMediaWidth,
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  FUTURA_BODY_SIZE,
  typography,
  SANS_HEADING,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { TypesetLink } from "../components/TypesetLink"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && !feature
  )
  const feature = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && feature
  )
  console.table(projects)

  // Window.matchMatch(CSSMediaQuery via JS)
  return (
    <Layout>
      <HtmlHead
        title="Portfolio Projects"
        description={
          "A collection of Manny Ikomi's design portfolio work, including identity design, typography, web design, branding, and logo design"
        }
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
        {/* <Header siteTitle={"Manny Ikomi"}></Header> */}
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          <SectionBlock
            css={{
              backgroundColor: colors.darkGray,
            }}
          >
            <ContentArea css={{ maxWidth: "80rem" }}>
              <Gallery
                css={{
                  ".project-cover": {
                    marginBottom: TOUCH_TARGET,
                  },
                  ...onTabletMedia({
                    ".project-cover": {
                      marginBottom: 0,
                    },
                  }),
                }}
              >
                {feature.map(project => (
                  <Link
                    to={"/" + project.slug} /* css={{ display: "block" }} */
                    className={"project-cover"}
                  >
                    <figure
                      css={{
                        color: colors.muteGray,
                        textDecoration: "initial",
                      }}
                    >
                      {/* <ProjectCover {...project} key={project.id} /> */}
                      <ProjectPhoto {...project.cover} key={project.id} />
                      <figcaption>
                        <h1
                          css={{
                            ...SANS_HEADING,
                            fontSize: "1rem",
                            textTransform: "initial",
                          }}
                        >
                          {project.title}
                        </h1>
                        <h2
                          css={{
                            fontSize: "2rem",
                            fontStyle: "italic",
                            textTransform: "initial",
                          }}
                        >
                          {project.subtitle}
                        </h2>
                        <p css={{ textDecoration: "initial" }}>
                          {project.seoDescription}
                        </p>
                      </figcaption>
                    </figure>
                  </Link>
                ))}
              </Gallery>
            </ContentArea>
          </SectionBlock>
          <hr />
          <SectionBlock
            css={{
              backgroundColor: colors.muteGray,
            }}
          >
            <ContentArea css={{ maxWidth: "80rem" }}>
              <Gallery
                css={{
                  ".project-cover": {
                    marginBottom: TOUCH_TARGET,
                  },
                  ...onTabletMedia({
                    ".project-cover": {
                      marginBottom: 0,
                    },
                  }),
                }}
              >
                {projects.map(project => (
                  <ProjectCover {...project} key={project.id} />
                ))}
              </Gallery>
            </ContentArea>
          </SectionBlock>

          <hr />
          <SectionBlock
            css={{
              backgroundColor: colors.darkGray,
              color: colors.muteGray,
            }}
          >
            experimental section
            {/* <ContentArea css={{ maxWidth: "80rem" }}>
              <Gallery
                css={{
                  ".project-cover": {
                    marginBottom: TOUCH_TARGET,
                  },
                  ...onTabletMedia({
                    ".project-cover": {
                      marginBottom: 0,
                    },
                  }),
                }}
              >
                {projects.map(project => (
                  <ProjectCover {...project} key={project.id} />
                ))}
              </Gallery>
            </ContentArea> */}
          </SectionBlock>
          <hr />
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
