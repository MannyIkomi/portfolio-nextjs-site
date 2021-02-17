/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"

import {
  supportsGrid,
  onTabletMedia,
  colors,
  flex,
  onDesktopMedia,
  h1Text,
} from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"

import { Footer } from "../components/Footer"
import Markdown from "../components/markdown"

import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import { DesktopMenu } from "../components/DesktopMenu"
import { QuoteBlock } from "../components/QuoteBlock"

const AboutPage = ({ data }) => {
  const { bio, cardsCollected, heading, photo } = data.strapiAbout

  const imageProps = photo.childImageSharp ? photo.childImageSharp.fluid : photo // for fallback GIF support

  const inspirations = data.allStrapiInspiration.nodes

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
              backgroundColor: colors.darkGray,
              minHeight: "100vh",

              position: "relative",
            }}
          >
            <ContentArea
              css={{
                ...onTabletMedia({
                  ...supportsGrid({
                    gridTemplateAreas: `'headshot h1' 'void body'`,
                    gridTemplateColumns: "1fr 2fr",

                    maxWidth: "60rem",
                  }),
                }),
              }}
            >
              <div
                css={{
                  alignSelf: "flex-end",
                  margin: "0 0 auto auto",

                  // position: "relative",
                  width: "50%",
                  maxWidth: "20rem",
                  ...onTabletMedia({
                    ...supportsGrid({
                      width: "initial",
                      gridArea: "headshot",
                      alignSelf: "flex-end",
                      justifySelf: "flex-end",
                    }),
                  }),
                }}
              >
                <img
                  css={{ display: "block", width: "100%", height: "auto" }}
                  alt="Manny smiling at you"
                  {...imageProps}
                />
              </div>
              <h1
                css={{
                  whiteSpace: "pre-wrap", // preserves intentional linebreaks
                  padding: "1rem",
                  color: colors.orange,

                  ...onTabletMedia({
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
                  color: colors.muteGray,
                  padding: "1rem",
                  ...onTabletMedia({
                    ...supportsGrid({
                      gridArea: "body",
                    }),
                  }),
                }}
              >
                {bio}
              </Markdown>
            </ContentArea>
          </SectionBlock>
          <SectionBlock
            css={{
              backgroundColor: colors.muteGray,
              minHeight: "100vh",
              ...onTabletMedia({
                minHeight: "66vh",
              }),
              // ...onMedia("orientation: landscape", {
              //   minHeight: "100vh",
              // }),
            }}
          >
            <ContentArea>
              <QuoteBlock cite={"R. Buckminster Fuller"}>
                A designer is an emerging synthesis of artist, inventor,
                mechanic, objective economist, and evolutionary strategist.
              </QuoteBlock>
            </ContentArea>
          </SectionBlock>
        </main>
      </StickyScrollContainer>
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
