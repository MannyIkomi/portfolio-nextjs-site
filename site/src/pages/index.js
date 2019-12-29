import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const projects = []

const useHoverState = (init = false) => {
  const [isHovered, setIsHovered] = useState(init)

  const handleHover = e => {
    setIsHovered(!isHovered)
  }

  return [isHovered, handleHover]
}

const FillOverlay = ({ children, ...props }) => (
  <React.Fragment>
    <div>
      <div>fill motif</div>
      {children}
    </div>
  </React.Fragment>
)

const ProjectPhoto = ({ src, alt, ...props }) => <img src={src} alt={alt} />

const Cover = ({
  id,
  name,
  description,
  cover,
  slug,
  title,
  coverAlt,
  ...props
}) => {
  const [isHovered, handleHover] = useHoverState()

  return (
    <figure onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Link>
        <ProjectPhoto src={cover.publicURL} alt={coverAlt} />
        {isHovered && (
          <FillOverlay>
            <figcaption>
              <h1>{title}</h1>
              <h2>{description}</h2>
            </figcaption>
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}

const IndexPage = ({ data }) => {
  const edges = data.allStrapiProjects.edges

  const projects = edges.map(obj => obj.node)

  return (
    // Window.matchMatch(CSSMediaQuery via JS)
    <Layout>
      <SEO title="Home" />
      {projects.map(project => (
        <Cover {...project} key={project.id} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProjects {
      edges {
        node {
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
  }
`

export default IndexPage
