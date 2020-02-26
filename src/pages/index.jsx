/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"
import Select from "react-select"

import {
  supportsGrid,
  onMediaWidth,
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  onMedia,
  PROJECT_SHADOW,
  FUTURA_BODY_SIZE,
  styleTransition,
  onDesktopMedia,
  maxLineMeasure,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { DesktopMenu } from "../components/DesktopMenu"
import { MotifLeft, MotifRight } from "../components/Motif"
import { ProjectTagHeading } from "./ProjectTagHeading"

export const SectionBreak = props => <hr css={{ margin: "5vh", border: 0 }} />

const IndexPage = ({ data }) => {
  const cmsProjects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && true // !feature
  )

  const [selectedProjects, setSelectedProjects] = useState(cmsProjects)

  // group project sections by category
  const feature = selectedProjects.filter(
    ({ draft, feature }) => !draft && feature
  )
  const interactiveProjects = selectedProjects.filter(project =>
    project.tags.some(({ design }) => design === "Interactive")
  )
  const identityProjects = selectedProjects.filter(project =>
    project.tags.some(({ design }) => design === "Identity")
  )
  const graphicProjects = selectedProjects.filter(project =>
    project.tags.every(
      ({ design }) => design !== "Identity" && design !== "Interactive"
    )
  )

  // const [windowHash, setWindowHash] = useState("")

  // useEffect(() => {
  //   if (typeof Document !== "undefined") {
  //     console.log(Document.location)
  //     Document.location.hash === `${windowHash}`
  //   }
  // })

  const heroTypesetAnimation = (overrides = {}) => {
    const typeset = keyframes({
      from: {
        transform: "rotateX(180deg) translateY(-28%)", //translate adjusts optical baseline to the x-height when flipped
      },
      to: {
        // transform: "rotateX(0)",

        transform: "rotateX(0) translateY(0)",
        color: colors.orange,
      },
    })

    return {
      display: "inline-block",
      transformOrigin: "center center",

      transform: "rotateX(180deg) translateY(-28%)",
      color: colors.orange50,

      animationName: typeset,
      animationDuration: "300ms",
      animationFillMode: "forwards",
      animationIterationCount: 1,

      ...overrides,
    }
  }

  return (
    <Layout>
      <HtmlHead
        title="Portfolio Projects"
        description={`I design thoughtful—clear visual language that creates delightful experiences. View my online portfolio featuring identity design, typography, web design, branding, and logo design`}
      />
      <StickyScrollContainer
        css={[
          {
            "#mobile": flex("row"), // show StickyMenuBar
            "#desktop": { display: "none" },
          },
          onDesktopMedia({
            ...flex("row"), // puts desktop <nav> on the left of <main>
            "#mobile": { display: "none" },
            "#desktop": flex("column"), // show DesktopMenu
          }),
        ]}
      >
        <DesktopMenu />
        <StickyMenuBar />
        <main
          css={{
            width: "100%",
            backgroundColor: colors.darkGray,
          }}
        >
          <SectionBlock
            css={{ minHeight: "25vh", padding: "1rem", position: "relative" }}
          >
            <ContentArea css={{ fontSize: "3rem" }}>
              <h1>
                I design{" "}
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "1s" }),
                  ]}
                >
                  thoughtful
                </span>
                —
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "2s" }),
                  ]}
                >
                  clear&nbsp;
                </span>
                visual language that creates delightful {/* brand? */}
                experiences.
              </h1>
            </ContentArea>
            <ContentArea css={{ textAlign: "center" }}>
              <p css={{ display: "inline-block" }}>Are you looking for…</p>
              <Select
                options={[
                  { label: "Web & UI Design", value: "interactive" },
                  { label: "Logo & Identity Design", value: "identity" },
                  { label: "Print & Graphic Design", value: "graphic" },
                  // { label: "Typography", value: "typography" },
                  // { label: "Art Direction", value: "art direction" },
                  { label: "Impress Me!", value: "" },
                  // { label: "My favorite piece", value: "favorite" },
                ]}
                onChange={({ value }) => {
                  if (!value) {
                    return setSelectedProjects(cmsProjects)
                  }

                  if (value === "graphic") {
                    return setSelectedProjects(
                      cmsProjects.filter(project =>
                        project.tags.every(
                          ({ design }) =>
                            design.toUpperCase() !== "interactive".toUpperCase()
                        )
                      )
                    )
                  }

                  setSelectedProjects(
                    cmsProjects.filter(project =>
                      project.tags.some(
                        ({ design }) =>
                          design.toUpperCase() === value.toUpperCase()
                      )
                    )
                  )
                  // setWindowHash(value)
                }}
                isMulti={false}
                placeholder={"design?"}
                styles={{
                  container: provided => {
                    return {
                      ...provided,
                      display: "inline-block",
                      ...FUTURA_BODY_SIZE,
                      minWidth: "6rem",
                      width: "100%",
                      ...maxLineMeasure,
                      maxWidth: "max-content",

                      ...onMedia("hover: hover", {
                        "&:hover": {
                          borderColor: colors.orange,
                        },
                      }),
                    }
                  },
                  control: (provided, state) => ({
                    ...provided,
                    border: 0,
                    borderRadius: 0,
                    borderBottom: state.isFocused
                      ? `solid 0.05rem ${colors.orange}`
                      : `solid 0.05rem ${colors.orange50}`,

                    ...onMedia("hover: hover", {
                      "&:hover": {
                        borderColor: colors.orange,
                      },
                    }),
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    div: {
                      padding: 0,
                    },
                  }),
                  input: provided => ({
                    ...provided,
                    ...FUTURA_BODY_SIZE,
                    caretColor: colors.orange,
                  }),
                  indicatorsContainer: provided => ({
                    ...provided,
                    display: "none",
                  }),
                  menu: provided => ({
                    ...provided,
                    backgroundColor: colors.muteGray,
                  }),
                }}
              />
            </ContentArea>
            <MotifLeft
              css={{
                width: "12.5%",
                height: "auto",
                position: "absolute",
                left: 0,
                bottom: "-1px",
              }}
            />
            <MotifRight
              css={{
                fill: colors.muteGray,
                width: "12.5%",
                height: "auto",
                position: "absolute",
                right: 0,
                top: "100%",
                top: "calc(100% - 1px)",
              }}
            />
          </SectionBlock>
          {feature.length > 0 && (
            <>
              <SectionBlock
                id={"feature"}
                css={{
                  backgroundColor: colors.darkGray,
                  minHeight: "50vh",
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Featured Work</ProjectTagHeading>z
                  {feature.map(project => (
                    <Link
                      to={"/" + project.slug} /* css={{ display: "block" }} */
                      className={"project-cover"}
                      css={{
                        display: "block",
                        ...flex("column"),
                        justifyContent: "center",
                        marginBottom: TOUCH_TARGET,
                        ...onTabletMedia({
                          margin: "1rem",
                          marginBottom: TOUCH_TARGET,
                        }),
                      }}
                      key={project.id}
                    >
                      <figure
                        css={{
                          // img: {},
                          ...styleTransition(),
                          ...onMediaWidth(
                            "800px",
                            supportsGrid({
                              margin: 0,
                              gridTemplateColumns: "1fr 1fr",
                              gridGap: `calc(${TOUCH_TARGET} / 2)`,
                            })
                          ),
                          ...onMedia("hover: hover", {
                            "&:hover": {
                              // boxShadow:
                              // img: {
                              ...styleTransition(),
                              transform: "scale(1.025)",
                              transformOrigin: "center",
                              // },
                            },
                          }),
                        }}
                      >
                        <ProjectPhoto
                          css={{ boxShadow: PROJECT_SHADOW }}
                          {...project.cover.childImageSharp.fluid}
                        />
                        <figcaption
                          css={{
                            ...flex("column"),
                            justifyContent: "flex-end",
                            color: colors.muteGray,
                            marginTop: "1rem",
                          }}
                        >
                          <h1
                            css={{
                              ...SANS_HEADING,
                              color: colors.muteGray,
                              ...FUTURA_BODY_SIZE,
                              textTransform: "initial",
                            }}
                          >
                            {project.title}
                          </h1>
                          <h2
                            css={{
                              color: colors.orange,
                              fontSize: "2rem",
                              fontStyle: "italic",

                              textTransform: "initial",
                            }}
                          >
                            {project.subtitle}
                          </h2>
                          <p css={{ textDecoration: "none" }}>
                            {project.seoDescription}
                          </p>

                          <TokenList>
                            {project.tags.map(
                              ({ design, detail }) => detail || design
                            )}
                          </TokenList>
                        </figcaption>
                      </figure>
                    </Link>
                  ))}
                </ContentArea>
              </SectionBlock>
            </>
          )}
          {/* INTERACTIVE DESIGN  */}
          {interactiveProjects.length > 0 && (
            <>
              <SectionBreak />
              <SectionBlock
                id={"interactive"}
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Interactive Design</ProjectTagHeading>

                  <Gallery>
                    {interactiveProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}
          {/* IDENTITY DESIGN */}
          {identityProjects.length > 0 && (
            <>
              <SectionBreak />
              <SectionBlock
                id={"identity"}
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Identity Design</ProjectTagHeading>

                  <Gallery>
                    {identityProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}
          {/* GRAPHIC DESIGN */}
          {graphicProjects.length > 0 && (
            <>
              <SectionBreak />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>graphic design</ProjectTagHeading>

                  <Gallery>
                    {graphicProjects.map(project => (
                      <ProjectCover {...project} key={project.id} />
                    ))}
                  </Gallery>
                </ContentArea>
              </SectionBlock>
            </>
          )}

          <SectionBreak />
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    # add {completed} field to keep rendering in chronological order
    allStrapiProjects(
      sort: { fields: completed, order: DESC }
      filter: { private: { eq: false } }
    ) {
      nodes {
        id
        coverAlt
        title
        subtitle
        slug
        draft
        feature
        seoDescription
        tags {
          design
          detail
        }
        # private filtered out of query entirely
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
      }
    }
  }
`

export default IndexPage
