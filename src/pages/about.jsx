/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/react"
import { graphql } from "gatsby"
import TypeMotif from "../../static/typemotif.svg"

import {
  supportsGrid,
  onTabletMedia,
  colors,
  flex,
  onDesktopMedia,
  h1Text,
  TOUCH_TARGET,
  grid12Columns,
  maxTypeWidth,
  grid,
} from "../styles"
import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"

import { Footer } from "../components/Footer"
import Markdown from "../components/Markdown"

import { ContainerWidth } from "../components/ContainerWidth"
import { SectionBlock } from "../components/SectionBlock"
import { DesktopMenu } from "../components/DesktopMenu"
import { QuoteBlock } from "../components/QuoteBlock"

const AboutPage = ({ data }) => {
  const { bio, cardsCollected, heading, photo } = data.strapiAbout

  const imageProps = photo.childImageSharp ? photo.childImageSharp.fluid : photo // for fallback GIF support

  return (
    <Layout>
      <HtmlHead
        title={"About Me"}
        description={`Currently I'm pursuing my BFA in Interactive Design at Lesley University, looking for opportunities in web design and UI/UX roles at creative agencies and tech companies.
        `}
      />
      <StickyScrollContainer
        css={[
          {
            "#mobile": flex("row"),
            "#desktop": { display: "none" },
          },
          onDesktopMedia({
            ...flex("row"), // puts desktop <nav> on the left of <main>
            "#mobile": { display: "none" },
            "#desktop": flex("column"),
          }),
        ]}
      >
        <DesktopMenu />
        <StickyMenuBar />

        <main css={{ ...flex("column"), alignItems: "center" }}>
          <SectionBlock
            css={{
              ...flex("column"),
              backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
              minHeight: "100vh",

              position: "relative",
            }}
          >
            <ContainerWidth
              css={{
                ...onTabletMedia(
                  grid12Columns({
                    gridTemplateColumns: "1fr 2fr",
                    gridTemplateAreas: `'headshot h1' 'VOID body'`,
                    justifyContent: "end",
                  })
                ),
              }}
            >
              <div // portrait container
                css={{
                  position: "relative",
                  width: "33%",
                  maxWidth: "20rem",

                  // []fix motif/border on mobile
                  ...onTabletMedia({
                    ...supportsGrid({
                      width: "initial",
                      gridArea: "headshot",
                      alignSelf: "end",
                      justifySelf: "end",
                    }),
                  }),
                }}
              >
                <div
                  // background motif
                  css={{
                    position: "absolute",
                    bottom: "-20%",
                    left: "-20%",
                    width: "100%",
                    height: "100%",

                    backgroundImage: `url(${TypeMotif})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "25%",
                  }}
                />
                <img
                  css={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Manny smiling at you!"
                  {...imageProps}
                />
                <div
                  css={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: `0.5rem solid ${colors.YELLOW}`,
                  }}
                />
              </div>
              <h1
                css={{
                  whiteSpace: "pre-wrap", // preserves intentional linebreaks
                  color: colors.TURQUOISE,
                  margin: "1rem 0",

                  ...onTabletMedia({
                    margin: "1rem 1rem 0 1rem",
                    fontSize: "5vmin !important",
                    ...supportsGrid({
                      gridArea: "h1",
                      alignSelf: "flex-end",
                    }),
                  }),
                }}
              >
                {heading.replace(/,\s/gi, ",\n")}
              </h1>
              <Markdown
                preprocessor={markdown =>
                  markdown.replace("{{CARDS}}", cardsCollected)
                }
                css={{
                  color: colors.NAVY_BLUE,
                  ...maxTypeWidth,
                  ...onTabletMedia({
                    padding: "1rem",
                    ...supportsGrid({
                      gridArea: "body",
                    }),
                  }),
                }}
              >
                {bio}
              </Markdown>
            </ContainerWidth>
          </SectionBlock>
        </main>
      </StickyScrollContainer>
      <SectionBlock
        css={[
          {
            backgroundColor: colors.TURQUOISE,
            color: colors.LIGHT_GRAY,
            padding: TOUCH_TARGET,
            ...supportsGrid({
              padding: "1rem",
            }),
          },
        ]}
      >
        <ContainerWidth
          css={{
            minHeight: "66vh",
            ...flex("column"),
            justifyContent: "center",

            ...grid12Columns({
              alignItems: "center",
            }),

            ...onTabletMedia({
              minHeight: "33vh",
            }),
          }}
        >
          <QuoteBlock
            cite={"R. Buckminster Fuller"}
            css={supportsGrid({ gridColumn: "2 / 12" })}
          >
            A designer is an emerging synthesis of artist, inventor, mechanic,
            objective economist, and evolutionary strategist.
          </QuoteBlock>
        </ContainerWidth>
      </SectionBlock>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    strapiAbout {
      bio
      cardsCollected
      heading
      email
      website
      photo {
        publicURL
        childImageSharp {
          fluid(quality: 50) {
            src
            srcSet
            sizes
          }
        }
      }
    }
    allStrapiInspiration(sort: { fields: sequence }) {
      nodes {
        id
        website
        photo {
          publicURL
          childImageSharp {
            fluid(quality: 50) {
              src
              srcSet
              sizes
            }
          }
        }
        name
        description
      }
    }
  }
`

export default AboutPage
