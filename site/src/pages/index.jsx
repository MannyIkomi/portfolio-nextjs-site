import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../styles"

import Layout from "../components/layout"
// import Image from "../components/image"
import HtmlHead from "../components/HtmlHead"
import { useHoverState } from "../hooks/useHoverState"
import { Footer } from "../components/Footer"

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

const Gallery = ({ children, ...props }) => {
  return (
    <section
      css={{
        backgroundColor: colors.darkGray,
        width: "100%",
        padding: "2rem",
        // ...mixin.tabletMedia({
        //   ...mixin.supportsGrid({
        //     display: 'grid',
        //     gridTemplateColumns: '1fr 1fr',
        //     gridColumnGap: '4rem',
        //     gridAutoFlow: 'row'
        //   })
        // })
      }}
    >
      {children}
    </section>
  )
}

const IndexPage = ({ data }) => {
  const edges = data.allStrapiProjects.edges
  const projects = edges.map(obj => obj.node)

  return (
    // Window.matchMatch(CSSMediaQuery via JS)
    <Layout>
      <HtmlHead title="Index" />
      <Gallery>
        {projects.map(project => (
          <Cover {...project} key={project.id} />
        ))}
      </Gallery>
      <Footer />
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
