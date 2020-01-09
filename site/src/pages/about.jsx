/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import {
  menubarHeight,
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

  const inspirations = data.allStrapiInspiration.nodes

  return (
    <Layout>
      <HtmlHead
        title={"Hi There! 🤓"}
        description={`With over 5 years of experience in the print industry, I've gained the skills required to craft design ideas into a high quality product.`}
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
        <StickyMenuBar>
          <TypesetLink to={"/"}>Werk</TypesetLink>
          <TypesetLink to={"/about"}>About</TypesetLink>
          <TypesetLink to={"/resume"}>Resume</TypesetLink>
          <TypesetLink to={"/contact"}>Say Hello</TypesetLink>
        </StickyMenuBar>
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
              // ...onTabletMedia({
              //   ...supportsGrid({
              //     display: "grid",
              //     gridTemplateAreas: `'headshot h1 h1' 'void body body'`,
              //     gridTemplateColumns: "1fr 1fr 1fr",
              //   }),
              // }),
            }}
          >
            <ContentArea>
              <div
                css={{
                  alignSelf: "flex-end",
                  margin: "0 0 auto auto",
                  // position: "relative",
                  width: "50%",
                  maxWidth: "20rem",
                }}
              >
                <img
                  css={{ display: "block", width: "100%", height: "auto" }}
                  src={photo.publicURL}
                  alt="Manny smiling at you"
                />
              </div>
              <h1 css={{ padding: "1rem", color: colors.orange }}>{heading}</h1>
              <Markdown
                preprocessor={markdown =>
                  markdown.replace("{{CARDS}}", cardsCollected)
                }
                css={{ color: colors.muteGray, padding: "1rem" }}
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
                <h1>Creatives who inspire me…</h1>
                <p>
                  I once heard somewhere that we are the sum of the people who
                  are closest to us. While I may not know these people
                  personally, I do know their work very well. So I like to
                  think, my work is the sum of theirs, and what I've learned
                  from them.
                </p>
              </div>
              {inspirations.map(person => (
                <CreativeInspiration {...person}></CreativeInspiration>
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
      }
    }
    allStrapiInspiration {
      nodes {
        website
        photo {
          publicURL
        }
        name
        description
      }
    }
  }
`

export default AboutPage
