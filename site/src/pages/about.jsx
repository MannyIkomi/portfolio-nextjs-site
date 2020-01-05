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
  maxLineMeasure,
} from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"
import Debug from "../components/Debug"
import Markdown from "../components/markdown"
import { CreativeInspiration } from "../components/CreativeInspiration"

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
          <InlineLink to={"/"}>Werk</InlineLink>
          <InlineLink to={"/about"}>About</InlineLink>
          <InlineLink to={"/resume"}>Resume</InlineLink>
          <InlineLink to={"/contact"}>Say Hello</InlineLink>
        </StickyMenuBar>
        {/* <Header siteTitle={"Manny Ikomi"}></Header> */}
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main css={{ ...flex("column"), alignItems: "center" }}>
          <section
            css={{
              ...flex("column"),
              backgroundColor: colors.darkGray,
              width: "100%",
              minHeight: "100vh",
              alignItems: "center",
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
            <div className={"content"} css={{ ...maxLineMeasure }}>
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
            </div>
          </section>
          <section>
            <blockquote>
              <p>
                “A designer is an emerging synthesis of artist, inventor,
                mechanic, objective economist, and evolutionary strategist.”
              </p>
              <footer>
                <cite>— R. Buckminster Fuller</cite>
              </footer>
            </blockquote>
          </section>
          <section>
            <h1>Creatives who inspire me…</h1>
            {inspirations.map(person => (
              <CreativeInspiration {...person}></CreativeInspiration>
            ))}
          </section>
          <Debug {...data} />
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
