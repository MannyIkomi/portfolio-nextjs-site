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
import { MotifRight, MotifLeft } from "../components/Motif"
import { Footer } from "../components/Footer"
import Markdown from "../components/markdown"
import { CreativeInspiration } from "../components/CreativeInspiration"
import { ContentArea } from "../components/ContentArea"
import { SectionBlock } from "../components/SectionBlock"
import { DesktopMenu } from "../components/DesktopMenu"
import { QuoteBlock } from "../components/QuoteBlock"

const AboutPage = ({ data }) => {
  const {
    bio,
    cardsCollected,
    heading,

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
            <MotifLeft
              css={{
                width: "20%",
                height: "auto",
                position: "absolute",
                left: 0,
                bottom: "1px",

                transform: "rotateX(180deg)",
                transformOrigin: "bottom center",
              }}
            />
            <MotifRight
              css={[
                {
                  fill: colors.muteGray,

                  width: "20%",
                  height: "auto",

                  position: "absolute",
                  right: 0,
                  bottom: "-1px",
                  transform: "rotateX(180deg)",
                  transformOrigin: "center center",
                },
              ]}
            />
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
                <h2 css={[h1Text()]}>Creatives who inspire&nbsp;me…</h2>
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
