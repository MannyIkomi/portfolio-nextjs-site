import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { Footer } from "../components/Footer"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes
  // const projects = edges.map(obj => obj.node)

  return (
    // Window.matchMatch(CSSMediaQuery via JS)
    <Layout>
      <HtmlHead title="Index" />
      <Gallery>
        {projects.map(project => (
          <ProjectCover {...project} key={project.id} />
        ))}
      </Gallery>
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
