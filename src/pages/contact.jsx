/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { MENUBAR_HEIGHT } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { TypesetLink } from "../components/TypesetLink"
import { Footer } from "../components/Footer"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <HtmlHead title={"Say Hello"} />

      <StickyScrollContainer
        css={{
          "::before": {
            content: "",
            display: "block",
            width: "100%",
            maxHeight: MENUBAR_HEIGHT,
          },
        }}
      >
        <StickyMenuBar />

        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>Contact Page</main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export default ContactPage
