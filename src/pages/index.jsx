/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"
import smoothscroll from "smoothscroll-polyfill"

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
  SANS_TYPE,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import ProjectPhoto from "../components/ProjectPhoto"
import { TokenList } from "../components/TokenList"
import { DesktopMenu } from "../components/DesktopMenu"
import { MotifLeft, MotifRight } from "../components/Motif"
import { ProjectTagHeading } from "../components/ProjectTagHeading"
import { SectionBreak } from "../components/SectionBreak"

// console.clear()

const IndexPage = ({ data }) => {
  const cmsProjects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && true // !feature
  )

  const [selectedProjects, setSelectedProjects] = useState(cmsProjects)
  const [scrollId, setScrollId] = useState("")

  const useScrollToId = elementId => {
    useEffect(() => {
      if (typeof document !== "undefined" && elementId) {
        // https://github.com/iamdustan/smoothscroll
        smoothscroll.polyfill()

        const elementArea = document.getElementById(elementId).getClientRects()
        window.scroll({
          top: elementArea[0].top,
          behavior: "smooth",
        })
      }
    })
  }

  useScrollToId(scrollId)

  // group project sections by category
  const feature = selectedProjects.filter(
    ({ draft, feature }) => !draft && feature
  )
  const webProjects = selectedProjects.filter(project =>
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
  const WEB_SECTION = "interactive"
  const IDENTITY_SECTION = "identity"

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I create thoughtful visual language that drives delightful brand experiences.`}
        project={feature[0]}
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
            <ContentArea
              css={{
                // fontSize: "3rem",

                ...flex("column"),
                justifyContent: "space-around",

                ...onTabletMedia({ maxWidth: "75%" }),
              }}
            >
              <h1
                css={[
                  // { fontSize: "3vmin" },

                  onTabletMedia({
                    fontSize: "5vmin",
                    margin: `${TOUCH_TARGET} 0`,
                  }),

                  onDesktopMedia({
                    fontSize: "5vmin",
                  }),
                ]}
              >
                I create{" "}
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "1s" }),
                  ]}
                >
                  thoughtful&nbsp;
                </span>
                visual language that drives{" "}
                <span
                  css={[
                    { font: "inherit" },
                    heroTypesetAnimation({ animationDelay: "2s" }),
                  ]}
                >
                  delightful&nbsp;
                </span>
                brand experiences.
              </h1>
              {/* <SectionBreak /> */}
              <Select
                options={[
                  { label: "Web Design", value: WEB_SECTION },
                  {
                    label: "Branding & Identity Design",
                    value: IDENTITY_SECTION,
                  },
                  // { label: "Print & Graphic Design", value: "graphic" },
                  { label: "Impress Me!", value: "feature" },
                  // { label: "My Favorite Project", value: "favorite" },
                ]}
                onChange={({ value }) => {
                  setScrollId(value) //scrolls to selected section
                  if (!value || "feature") {
                    return setSelectedProjects(cmsProjects)
                  }

                  if (value === "graphic") {
                    return setSelectedProjects(
                      cmsProjects.filter(project =>
                        project.tags.every(
                          ({ design, detail }) =>
                            (detail && // null check
                              detail.toUpperCase() === value.toUpperCase()) || // case insensitive string match
                            design.toUpperCase() !== WEB_SECTION.toUpperCase()
                        )
                      )
                    )
                  }

                  setSelectedProjects(
                    cmsProjects.filter(project =>
                      project.tags.some(
                        ({ design, detail }) =>
                          (detail && // null check
                            detail.toUpperCase() === value.toUpperCase()) ||
                          design.toUpperCase() === value.toUpperCase()
                      )
                    )
                  )
                }}
                isMulti={false}
                placeholder={"How can I help you?"}
                isSearchable={false}
                theme={theme => ({
                  ...theme,
                  ...SANS_TYPE,
                  ...FUTURA_BODY_SIZE,

                  borderRadius: 0,
                  textAlign: "center",

                  primary: colors.orange,
                  primary25: colors.orange20,
                  primary50: colors.orange50,
                  primary80: colors.orange80,
                  danger: "red",
                })}
                styles={{
                  container: provided => {
                    return {
                      ...provided,
                      ...FUTURA_BODY_SIZE,
                      alignSelf: "center",

                      display: "inline-block",
                      minWidth: "10rem",
                      width: "100%",
                      ...maxLineMeasure,
                      maxWidth: "25rem",

                      margin: "5%",

                      ...onTabletMedia({
                        fontSize: "2rem",
                        margin: TOUCH_TARGET,
                      }),

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
                    borderColor: "initial",
                    boxShadow: "none",

                    borderBottom: state.isFocused
                      ? `solid 0.1rem ${colors.orange}`
                      : `solid 0.1rem ${colors.orange50}`,

                    ...onMedia("hover: hover", {
                      "&:hover": {
                        borderColor: colors.orange,
                      },
                    }),
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    div: {
                      // contains value and input
                      padding: 0,
                      justifyContent: "center",
                      overflow: "visible",
                    },
                    textAlign: "center",
                  }),
                  singleValue: provided => ({
                    ...provided,

                    overflow: "visible",
                  }),
                  input: provided => ({
                    ...provided,

                    caretColor: colors.orange,
                  }),
                  indicatorsContainer: provided => ({
                    ...provided,
                    display: "none",
                  }),
                  menu: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                      ? colors.orange
                      : colors.muteGray,

                    textAlign: "center",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    minHeight: TOUCH_TARGET,
                    padding: "1rem",

                    backgroundColor: state.isSelected
                      ? colors.orange
                      : "inherit",
                    // backgroundColor: state.isFocused
                    //   ? colors.orange50
                    //   : "inherit",

                    ...onMedia("hover: hover", {
                      "&:hover": {
                        backgroundColor: state.isSelected
                          ? colors.orange
                          : colors.orange50,
                      },
                    }),
                  }),
                }}
              />
            </ContentArea>

            <MotifLeft
              css={{
                width: "12.5%",
                height: "auto",
                position: "absolute",
                left: "-1px",
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

                top: "calc(100% - 1px)",
              }}
            />
          </SectionBlock>
          {feature.length > 0 && (
            <>
              <SectionBreak id={"feature"} />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                  minHeight: "50vh",
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Featured Work</ProjectTagHeading>
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
                          <h3
                            css={{
                              ...SANS_HEADING,
                              color: colors.muteGray,
                              ...FUTURA_BODY_SIZE,
                              textTransform: "initial",
                            }}
                          >
                            {project.title}
                          </h3>
                          <h4
                            css={{
                              color: colors.orange,
                              fontSize: "2rem",
                              fontStyle: "italic",

                              textTransform: "initial",
                            }}
                          >
                            {project.subtitle}
                          </h4>
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
          {/* WEB DESIGN  */}
          {webProjects.length > 0 && (
            <>
              <SectionBreak id={WEB_SECTION} />
              <SectionBlock
                css={{
                  backgroundColor: colors.darkGray,
                }}
              >
                <ContentArea css={{ maxWidth: "80rem", padding: "1rem" }}>
                  <ProjectTagHeading>Web Design</ProjectTagHeading>

                  <Gallery>
                    {webProjects.map(project => (
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
              <SectionBreak id={IDENTITY_SECTION} />
              <SectionBlock
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
          {/*           
          {graphicProjects.length > 0 && (
            <>
              <SectionBreak id={"graphic"} />
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
          )} */}
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
