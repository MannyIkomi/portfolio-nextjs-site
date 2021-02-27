/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  MENUBAR_HEIGHT,
  flex,
  colors,
  TOUCH_TARGET,
  onTabletMedia,
  onMedia,
  onSupport,
  onDesktopMedia,
  SANS_TYPE,
  maxTypeWidth,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { Footer } from "../components/Footer"
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { InteractiveModule } from "../components/InteractiveModule"
import { LinkModule } from "../components/LinkModule"
import { TextModule } from "../components/TextModule"
import { ProjectCover } from "../components/ProjectCover"
import { SectionBlock } from "../components/SectionBlock"
import { ColorOverprint } from "../components/FillOverlay"
import { TokenList } from "../components/TokenList"
import Markdown from "../components/Markdown"
import { useEffect } from "react"
import { useState } from "react"
import {
  CAPTION,
  IMAGE,
  INTERACTIVE,
  INTRO,
  LINK,
  TEXT,
} from "../util/moduleTypes"

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
    const otherTags = otherProject.tags.map(({ design, label }) =>
      label ? label : design
    )
    return filterWhereArrayIncludes(currentTags, otherTags).length > 0
  })
}

const ProjectTemplate = ({ data, site }) => {
  const thisProject = data.strapiProjects
  const otherProjects = data.allStrapiProjects.nodes

  // how to improve this algorithim to sort projects by the most tag matches
  const findRelatedProjects = filterProjectTags
  // const findRelatedProjects = filterProjectTags
  const {
    title,
    modules,
    draft,
    subtitle,
    seoDescription,
    themeColor,
    tags,
    cover,
    slug,
  } = thisProject

  const [responsiveImgSrc, setResponsiveImgSrc] = useState(
    thisProject.cover.childImageSharp.fluid.src
  )

  useEffect(() => {
    if (typeof document !== "undefined") {
      const coverImg = document.getElementById("cover")
      coverImg.addEventListener("load", () => {
        // console.log(coverImg.currentSrc)
        setResponsiveImgSrc(coverImg.currentSrc /*  || coverImg.src */)
      })
    }
  })

  return (
    <Layout>
      <HtmlHead
        title={`${thisProject.title}: ${thisProject.subtitle}`}
        description={thisProject.seoDescription}
        project={thisProject}
        path={`/${slug}`}
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
          <img
            css={{ display: "none" }}
            id={"cover"}
            alt={thisProject.coverAlt}
            {...thisProject.cover.childImageSharp.fluid}
          />
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
              backgroundColor: colors.LIGHT_GRAY,
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

                  // https://aclaes.com/responsive-background-images-with-srcset-and-sizes/
                  background: `url(${responsiveImgSrc})`,
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
                    backgroundColor: "rgba(0,0,0,0.9)",
                  },
                  onSupport("backdrop-filter: grayscale(50%)", {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(0.5rem)",
                  }),
                ]}
              />
              <ContainerWidth
                css={{
                  ...flex("column"),
                  justifyContent: "space-around",

                  zIndex: 1,
                  color: colors.LIGHT_GRAY_FOREGROUND,
                  minHeight: "50%",
                  height: "100%",
                  ...maxTypeWidth,
                }}
              >
                <h1
                  css={{
                    // ...tokenize({
                    //   color: colors.muteGray,
                    //   backgroundColor: colors.orange,
                    // }),

                    // ...SANS_HEADING,
                    color: colors.YELLOW,
                    textAlign: "right",
                    textTransform: "initial",

                    marginBottom: "0.5rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {title}
                </h1>
                <h2
                  css={{
                    textAlign: "right",
                    fontStyle: "italic",

                    ...SANS_TYPE,

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
                    <Markdown
                      css={{
                        textAlign: "left",
                        "h1,h2,h3,h4": { color: colors.YELLOW },
                      }}
                    >
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
              </ContainerWidth>
            </header>

            <SectionBlock
              css={{
                backgroundColor: themeColor || colors.TURQUOISE,
                width: "100%",
              }}
            >
              <ContainerWidth
                css={{
                  ...flex("column"),
                  alignItems: "center",

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
                    case INTRO:
                      break
                    case TEXT:
                      return <TextModule {...module} key={module.id} />
                    case IMAGE:
                      return <ImageModule {...module} key={module.id} />
                    case CAPTION:
                      return <CaptionModule {...module} key={module.id} />
                    case INTERACTIVE:
                      return <InteractiveModule {...module} key={module.id} />
                    case LINK:
                      return <LinkModule {...module} key={module.id} />
                    // case SECTION:
                    // use to split
                    //   return <div>CREATE SECTION MODULE</div> with glyph
                    default:
                      throw new Error(
                        `Could not find matching Component for Module: ${module.type}`
                      )
                  }
                })}
              </ContainerWidth>
            </SectionBlock>

            <footer css={{ width: "100%", backgroundColor: colors.LIGHT_GRAY }}>
              <SectionBlock
                css={[
                  onMedia("pointer: coarse", { overflow: "hidden" }),
                  { backgroundColor: colors.TURQUOISE },
                ]}
              >
                <ContainerWidth
                  css={[
                    // progressive enhance from single column vertical scroll
                    {
                      margin: TOUCH_TARGET,
                    },
                  ]}
                >
                  <h1 css={{ color: colors.LIGHT_GRAY }}>
                    You might also like…
                  </h1>
                </ContainerWidth>
                <ul
                  css={[
                    {
                      // progressive enhance from single column vertical scroll
                      listStyle: "none",
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
                  )
                    .slice(0, 3)
                    .map(related => (
                      <li
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
                      </li>
                    ))}
                </ul>
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
      themeColor
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
      # limit: 5 # max 3 related project recommendations
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
