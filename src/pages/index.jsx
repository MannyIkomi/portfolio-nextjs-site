/** @jsx jsx */
import { css, jsx } from "@emotion/core"
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
  menubarHeight,
  onMediaWidth,
  onTabletMedia,
  touchTarget,
  colors,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { TypesetLink } from "../components/TypesetLink"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes

  // Window.matchMatch(CSSMediaQuery via JS)
  return (
    <Layout>
      <HtmlHead title="Home" />
      <StickyScrollContainer
        css={{
          "::before": {
            content: "''",
            display: "block",
            width: "100%",
            maxHeight: menubarHeight,
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
                    marginBottom: "2rem",
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
    allStrapiProjects(sort: { fields: completed, order: DESC }) {
      nodes {
        coverAlt
        title
        subtitle
        slug
        draft
        cover {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
