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
import Debug from "../components/Debug"

export const filterProjectById = (thisProject, otherProjects) => {
  // filter current project from total projects list
  return otherProjects.filter(
    otherProject => otherProject.id !== thisProject.id
  )
  // filter projects.tags where current.tags match
}

export const filterWhereArrayIncludes = (arr1, arr2) => {
  return arr1.filter(item => arr2.includes(item))
}

export const filterProjectTags = (thisProject = {}, otherProjects = []) => {
  const currentTags = thisProject.tags.map(tag => tag.design)
  return otherProjects.filter(otherProject => {
    const otherTags = otherProject.tags.map(tag => tag.design)
    return filterWhereArrayIncludes(currentTags, otherTags).length > 0
  })
}

const ProjectTemplate = ({ data }) => {
  const thisProject = data.strapiProjects
  const otherProjects = data.allStrapiProjects.nodes

  // how to improve this algorithim to sort projects by the most tag matches
  const findRelatedProjects = filterProjectTags
  // const findRelatedProjects = filterProjectTags

  const {
    slug,
    title,
    modules,
    coverAlt,
    description,
    metaDescription,
  } = thisProject
  return (
    <Layout>
      <HtmlHead title={thisProject.title} />
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
                thisProject,
                otherProjects
                // removeCurrentProject(thisProject, otherProjects)
              ).map(related => (
                <ProjectCover {...related} key={related.id} />
              ))}
            </footer>
          </article>
        </main>
        <Debug {...data} />
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  #project has slug

  query($slug: String!) {
    #gets the single requested project data for viewing
    strapiProjects(slug: { eq: $slug }) {
      id
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

    # gets all projects !== to the selected projects for related recommendations
    allStrapiProjects(filter: { slug: { ne: $slug } }) {
      nodes {
        id
        title
        slug
        description
        tags {
          design
        }
        cover {
          publicURL
        }
        coverAlt
      }
    }
  }
`

export default ProjectTemplate
