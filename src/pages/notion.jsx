/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"

const Notion = () => {
  const [notionData, setNotionData] = useState({})
  const data = useStaticQuery(graphql`
    query notionQuery {
      allNotion {
        edges {
          node {
            id
            json
            properties {
              Name {
                id
              }
              Tags {
                id
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I design comprehensive brand experiences driven by thoughtful visual language.`}
      />
      <h1>Notion Data</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </Layout>
  )
}

export default Notion
