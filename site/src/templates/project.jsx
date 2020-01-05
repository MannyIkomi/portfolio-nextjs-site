/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { menubarHeight } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenu } from "../components/StickyMenu"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <HtmlHead title={"Project Title"} />
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
        <StickyMenu>
          <InlineLink to={"/"}>Werk</InlineLink>
          <InlineLink to={"/about"}>About</InlineLink>
          <InlineLink to={"/resume"}>Resume</InlineLink>
          <InlineLink to={"/contact"}>Say Hello</InlineLink>
        </StickyMenu>

        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          Dynamic Project Page
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiProjects(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          description
        }
      }
    }
  }
`

export default ProjectTemplate
