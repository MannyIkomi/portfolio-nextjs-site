/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"

import { Footer } from "../components/Footer"

const PrismicPage = ({ data }) => {
  const pages = data.allPrismicProject.nodes

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I design comprehensive brand experiences driven by thoughtful visual language.`}
      />
      {pages.map(page => {
        return (
          <code css={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(page, null, 2)}
          </code>
        )
      })}
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicQueryTest {
    allPrismicProject {
      nodes {
        dataString
      }
    }
  }
`

export default PrismicPage
