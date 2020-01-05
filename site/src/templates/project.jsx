/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { menubarHeight } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { TextModule } from "../components/TextModule"
import { ProjectCover } from "../components/ProjectCover"

const ProjectTemplate = ({ data }) => {
  const project = data.allStrapiProjects.nodes[0]

  // How to query/render related projects?
  // cant duplicate root queries with gatsby
  const otherProjects = []

  const removeCurrentProject = (thisProject, otherProjects) =>
    // filter current project from total projects list
    otherProjects.filter(otherProject => otherProject.id !== thisProject.id)
  // filter projects.tags where current.tags match

  const arrIntersect = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item))
  }

  const findRelatedProjects = (thisProject = {}, otherProjects = []) => {
    const currentTags = thisProject.tags.map(obj => obj.designTags)

    return otherProjects.filter(otherProject => {
      const otherTags = otherProject.tags.map(obj => obj.designTags)
      return arrIntersect(currentTags, otherTags).length > 0
    })
  }

  const {
    slug,
    title,
    modules,
    coverAlt,
    description,
    metaDescription,
  } = project
  return (
    <Layout>
      <HtmlHead title={project.title} />
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
        <StickyMenuBar>
          <InlineLink to={"/"}>Werk</InlineLink>
          <InlineLink to={"/about"}>About</InlineLink>
          <InlineLink to={"/resume"}>Resume</InlineLink>
          <InlineLink to={"/contact"}>Say Hello</InlineLink>
        </StickyMenuBar>

        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          Dynamic Project Page
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <article>
            <header>
              <h1>{title}</h1>
              <h1>{description}</h1>
            </header>
            <main>
              {modules.map(module => {
                console.log(module)

                switch (module.type) {
                  case "image":
                    return <ImageModule {...module} key={module.id} />
                  case "text":
                    return <TextModule {...module} key={module.id} />
                  case "caption":
                    return <CaptionModule {...module} key={module.id} />
                  // case 'section':
                  // use to split
                  //   return <div>CREATE SECTION MODULE</div> with glyph
                  default:
                    throw new Error(
                      `Could not find matching Component for Module: ${module.type}`
                    )
                }
              })}
            </main>
            <footer>
              <h1>You might also like…</h1>
              <br />
              {findRelatedProjects(
                project,
                removeCurrentProject(project, otherProjects)
              ).map(related => (
                <ProjectCover project={related} key={related.id} />
              ))}
            </footer>
          </article>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  #project has slug

  query($slug: String!) {
    allStrapiProjects(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        modules {
          id
          imageAlt
          text
          type
          image {
            publicURL
          }
        }
        tags {
          design
        }
        title
        coverAlt
        description
        metaDescription
      }
    }
  }
`

/* project !== slug
  OtherProjects($slug: String!) {
    allStrapiProjects(filter: { slug: { ne: $slug } }) {
      nodes {
        slug
        modules {
          id
          imageAlt
          text
          type
          image {
            publicURL
          }
        }
        tags {
          design
        }
        title
        coverAlt
        description
        metaDescription
      }
    }
  } */

export default ProjectTemplate
