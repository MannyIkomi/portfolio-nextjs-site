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
import { supportsGrid, menubarHeight } from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { InlineLink } from "../components/InlineLink"
import { StickyMenu } from "../components/StickyMenu"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes

  // Window.matchMatch(CSSMediaQuery via JS)
  return (
    <Layout>
      <HtmlHead title="Home" />
      <StickyScrollContainer
        css={{
          "::before": {
            content: "",
            display: "block",
            width: "100%",
            maxHeight: menubarHeight,
          },
        }}
      >
        <StickyMenu>
          <InlineLink to={"/"}>werk</InlineLink>
        </StickyMenu>
        <Header siteTitle={"Manny Ikomi"}></Header>
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          <Gallery
            css={{
              ".projectCover": {
                margin: "1rem 0",
              },
            }}
          >
            {projects.map(project => (
              <ProjectCover {...project} key={project.id} />
            ))}
          </Gallery>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProjects(sort: { fields: created_at }) {
      nodes {
        # add {completed} field to keep rendering in chronological order
        id
        coverAlt
        title
        updated_at
        created_at
        description
        slug
        cover {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
