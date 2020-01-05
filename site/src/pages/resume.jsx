/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { menubarHeight } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"

const ResumePage = ({ data }) => {
  return (
    <Layout>
      <HtmlHead title={"Résumé"} />

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
        <main>Resume Page</main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export default ResumePage
