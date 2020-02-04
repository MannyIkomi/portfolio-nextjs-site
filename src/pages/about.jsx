/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import {
  MENUBAR_HEIGHT,
  supportsGrid,
  onTabletMedia,
  colors,
  flex,
  onMedia,
} from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { TypesetLink } from "../components/TypesetLink"
import { Footer } from "../components/Footer"
import Debug from "../components/Debug"
import Markdown from "../components/markdown"
import { CreativeInspiration } from "../components/CreativeInspiration"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import { QuoteBlock } from "../components/QuoteBlock"

const AboutPage = ({ data }) => {
  const {
    bio,
    cardsCollected,
    heading,
    email,
    website,
    photo,
  } = data.strapiAbout
  const imageProps = photo.childImageSharp ? photo.childImageSharp.fluid : photo // for fallback GIF support

  const inspirations = data.allStrapiInspiration.nodes

  return (
    <Layout>
      <HtmlHead
        title={"About Me"}
        description={`With over 5 years of professional experience as a Graphic Designer and related roles, I have learned the tools and techniques required to craft ideas into real design solutions.`}
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
        {/* <Header siteTitle={"Manny Ikomi"}></Header> */}
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main css={{ ...flex("column"), alignItems: "center" }}>
          <SectionBlock
            css={{
              ...flex("column"),
              backgroundColor: colors.darkGray,
              minHeight: "100vh",
              // header: {
              //   padding: 0,
              // },
            }}
          >
            <ContentArea
              css={{
                ...onTabletMedia({
                  ...supportsGrid({
                    gridTemplateAreas: `'headshot h1' 'void body'`,
                    gridTemplateColumns: "1fr 2fr",
                    // gridTemplateColumns: "1fr minmax(2fr, 80rem)",
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
          <SectionBlock css={{ backgroundColor: colors.muteGray }}>
            <ContentArea>
              <div css={{ padding: "1rem" }}>
                <h1>Creatives who inspire&nbsp;me…</h1>
                <p>
                  I once heard that we are the sum of the people who are closest
                  to us. So I like to think of these people as my design
                  addends, my work is the sum of theirs and what I've learned
                  from them.
                </p>
              </div>
            </ContentArea>
            <ContentArea
              css={{
                width: "100%",
                maxWidth: "80rem",

                ...supportsGrid({
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(40rem, 100%), 40rem))", // only partial support in firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1341507

                  justifyContent: "center",
                  // gridAutoColumns: "minmax(100%, 40rem)",
                }),
              }}
            >
              {inspirations.map(person => (
                <CreativeInspiration
                  {...person}
                  key={person.name}
                ></CreativeInspiration>
              ))}
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
