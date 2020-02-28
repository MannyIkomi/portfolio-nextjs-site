/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import {
  MENUBAR_HEIGHT,
  flex,
  colors,
  SANS_HEADING,
  SERIF_TYPE,
  FUTURA_BODY_SIZE,
  TOUCH_TARGET,
  onTabletMedia,
  onMedia,
  onSupport,
  onDesktopMedia,
} from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { Footer } from "../components/Footer"
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { InteractiveModule } from "../components/InteractiveModule"
import { LinkModule } from "../components/LinkModule"
import { TextModule } from "../components/TextModule"
import { ProjectCover } from "../components/ProjectCover"
import { SectionBlock } from "../components/SectionBlock"
import { OrangeOverprint, ColorOverprint } from "../components/FillOverlay"
import { TokenList } from "../components/TokenList"
import Markdown from "../components/markdown"

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

  const { title, modules, draft, subtitle, seoDescription, tags } = thisProject

  return (
    <Layout>
      <HtmlHead
        title={`${thisProject.title}: ${thisProject.subtitle}`}
        description={thisProject.seoDescription}
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

        <main>
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
              backgroundColor: colors.muteGray,
            }}
          >
            <header
              css={[
                {
                  position: "relative",

                  ...flex("column"),
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "66vh",
                  width: "100%",
                  padding: "2rem",

                  textAlign: "center",

                  background: colors.muteGray,
                  // https://aclaes.com/responsive-background-images-with-srcset-and-sizes/
                  background: `url(${thisProject.cover.childImageSharp.fluid.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                },
                onDesktopMedia({
                  minHeight: "75vh",
                }),
              ]}
            >
              <ColorOverprint
                css={[
                  {
                    backgroundColor: colors.darkGray,
                  },
                  onSupport("backdrop-filter: grayscale(0.5rem)", {
                    backgroundColor: colors.mediumGray,
                    backdropFilter:
                      "blur(0.5rem) grayscale(100%) brightness(50%)",
                  }),
                ]}
              />
              <ContentArea
                css={{
                  ...flex("column"),
                  justifyContent: "space-around",

                  zIndex: 1,
                  color: colors.muteGray,
                  minHeight: "50%",
                  height: "100%",
                }}
              >
                <h1
                  css={{
                    ...SANS_HEADING,
                    // color: colors.darkGray,
                    textAlign: "right",
                    textTransform: "initial",

                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </h1>
                <h2
                  css={{
                    ...SERIF_TYPE,
                    textAlign: "right",
                    fontStyle: "italic",
                    ...FUTURA_BODY_SIZE,
                    textTransform: "initial",

                    marginBottom: "0.5rem",
                  }}
                >
                  {subtitle}
                </h2>
                <TokenList
                  css={{
                    textAlign: "right",
                    marginBottom: "0.5rem",
                    li: { marginRight: 0, marginLeft: "0.66rem" },
                  }}
                >
                  {tags.map(({ design, detail }) => detail || design)}
                </TokenList>
                {draft && (
                  <span style={{ color: "blue", textTransform: "uppercase" }}>
                    DRAFT
                  </span>
                )}

                {modules.some(module => {
                  return module.type === "intro"
                }) ? (
                  <>
                    <Markdown css={{ textAlign: "left" }}>
                      {
                        modules.filter(module => module.type === "intro")[0]
                          .text
                      }
                    </Markdown>
                    <br />
                  </>
                ) : (
                  <>
                    <p css={{ textAlign: "left" }}>{seoDescription}</p>
                    <br />
                  </>
                )}
              </ContentArea>
            </header>

            <SectionBlock
              css={{ backgroundColor: colors.darkGray, width: "100%" }}
            >
              <ContentArea
                css={{
                  ...flex("column"),
                  alignItems: "center",

                  // position: "relative",
                  // top: "-25vh",

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
                  // console.log(module)
                  switch (module.type) {
                    case "intro":
                      break
                    case "text":
                      return <TextModule {...module} key={module.id} />
                    case "image":
                      return <ImageModule {...module} key={module.id} />
                    case "caption":
                      return <CaptionModule {...module} key={module.id} />
                    case "interactive":
                      return <InteractiveModule {...module} key={module.id} />
                    case "link":
                      return <LinkModule {...module} key={module.id} />

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
                    // progressive enhance from single column vertical scroll
                    {
                      margin: TOUCH_TARGET,
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
                    }),
                  ]}
                >
                  {findRelatedProjects(
                    thisProject,
                    otherProjects
                    // removeCurrentProject(thisProject, otherProjects)
                  ).map(related => (
                    <div
                      key={related.id}
                      css={[
                        {
                          // progressive enhance from single column vertical scroll
                          minWidth: "15rem",
                          maxWidth: "20rem",
                          margin: "0 2rem",

                          ...onTabletMedia({
                            // marginRight: `${TOUCH_TARGET}`,
                            margin: "5%",
                            maxWidth: "30rem",
                          }),
                        },
                        onMedia("pointer: coarse", {
                          flex: "0 0 auto",
                          maxWidth: "66vw",
                          // TOUCH_TARGET,
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

      cover {
        publicURL
        childImageSharp {
          fluid(quality: 75, maxWidth: 2000, toFormat: JPG) {
            src
            srcSet
            sizes
          }
        }
      }
      modules {
        id
        imageAlt
        imageFill
        text
        type
        url

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
        detail
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
          detail
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
