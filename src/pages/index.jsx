/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

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
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { TypesetLink } from "../components/TypesetLink"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes.filter(({ draft }) => !draft)

  // Window.matchMatch(CSSMediaQuery via JS)
  return (
    <Layout>
      <HtmlHead
        title="Portfolio Projects"
        description={
          "A collection of Manny Ikomi's best design work, including identity design, typography, web design, branding, and logo design"
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
                {projects.map(project => (
                  <ProjectCover {...project} key={project.id} />
                ))}
              </Gallery>
            </ContentArea>
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
