/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
  menubarHeight,
  flex,
  colors,
  sansHeading,
  serifType,
  futuraBodySize,
  maxLineMeasure,
  touchTarget,
  onTabletMedia,
  onMedia,
  onMediaWidth,
} from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { TypesetLink } from "../components/TypesetLink"
import { Footer } from "../components/Footer"
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { TextModule } from "../components/TextModule"
import { ProjectCover } from "../components/ProjectCover"
import Debug from "../components/Debug"
import { SectionBlock } from "../components/SectionBlock"

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
    draft,
    subtitle,
    seoDescription,
  } = thisProject

  return (
    <Layout>
      <HtmlHead
        title={`${thisProject.title}: ${thisProject.subtitle}`}
        description={thisProject.seoDescription}
      />
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
        <StickyMenuBar />

        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
              backgroundColor: colors.muteGray,
            }}
          >
            <header
              css={{
                ...flex("column"),
                alignItems: "center",
                minHeight: "50vh",
                padding: "2rem",

                textAlign: "center",
              }}
            >
              <h1
                css={{
                  ...sansHeading,
                  color: colors.darkGray,
                  textTransform: "initial",
                }}
              >
                {title}
              </h1>
              <h2
                css={{
                  ...serifType,
                  fontStyle: "italic",
                  ...futuraBodySize,
                  textTransform: "initial",
                }}
              >
                {subtitle}
              </h2>
              <span style={{ color: "blue", textTransform: "uppercase" }}>
                {draft && "DRAFT"}
              </span>
            </header>

            <SectionBlock
              css={{ backgroundColor: colors.darkGray, width: "100%" }}
            >
              <ContentArea
                css={{
                  ...flex("column"),
                  alignItems: "center",

                  position: "relative",
                  top: "-25vh",

                  width: "100%",
                  maxWidth: "80rem",
                  padding: "0 1rem",

                  ...onTabletMedia({
                    padding: "0 2rem",
                  }),
                  // backgroundColor: colors.darkGray,
                }}
              >
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
              </ContentArea>
            </SectionBlock>

            <footer css={{ width: "100%", backgroundColor: colors.muteGray }}>
              <SectionBlock
                css={[onMedia("pointer: coarse", { overflow: "hidden" })]}
              >
                <ContentArea
                  css={[
                    {
                      // progressive enhance from single column vertical scroll
                    },
                    {
                      padding: touchTarget,
                    },
                  ]}
                >
                  <h1>You might also like…</h1>
                </ContentArea>
                <div
                  css={[
                    {
                      // progressive enhance from single column vertical scroll
                      ...flex("row"),
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",

                      width: "100%",
                      maxWidth: "80rem",
                      padding: "2rem",
                    },
                    onMedia("pointer: coarse", {
                      overflowX: "scroll",

                      ...flex("row"),
                      flexWrap: "nowrap",
                      alignItems: "center",
                      justifyContent: "initial",

                      maxWidth: "100vw",
                      minHeight: "66vh",
                      padding: touchTarget,
                    }),
                  ]}
                >
                  {findRelatedProjects(
                    thisProject,
                    otherProjects
                    // removeCurrentProject(thisProject, otherProjects)
                  ).map(related => (
                    <div
                      css={[
                        {
                          // progressive enhance from single column vertical scroll
                          minWidth: "10rem",
                          maxWidth: "20rem",
                          margin: touchTarget,

                          ...onTabletMedia({
                            maxWidth: "30rem",
                            margin: "5%",
                          }),
                        },
                        onMedia("pointer: coarse", {
                          flex: "0 0 auto",
                          maxWidth: "66vw",
                          marginRight: touchTarget,
                        }),
                      ]}
                    >
                      <ProjectCover {...related} key={related.id} />
                    </div>
                  ))}
                </div>
              </SectionBlock>
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
    #gets the single requested project data for viewing
    strapiProjects(slug: { eq: $slug }) {
      id
      draft
      slug
      modules {
        id
        imageAlt
        imageFill
        text
        type
        image {
          childImageSharp {
            original {
              src
            }
            fluid(
              quality: 75
              maxWidth: 1024
              toFormat: JPG # background: "rgba(255,255,255,1)"
            ) {
              src
              srcSet
              sizes
            }
          }
          publicURL
        }
      }
      tags {
        design
      }
      title
      subtitle
      coverAlt
      seoDescription
    }

    # gets all projects !== to the selected projects for related recommendations
    allStrapiProjects(
      limit: 4 # max 4 related project recommendations
      filter: {
        slug: { ne: $slug }
        draft: { eq: false }
        private: { eq: false }
      }
      sort: { fields: completed, order: DESC }
    ) {
      nodes {
        id
        title
        slug
        subtitle
        tags {
          design
        }
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
        coverAlt
      }
    }
  }
`

export default ProjectTemplate
