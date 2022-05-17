/** @jsx jsx */
import { jsx } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"

const Notion = () => {
  const data = useStaticQuery(graphql`
    query notionQuery {
      allNotion {
        nodes {
          internal {
            content
          }
          notionId
          properties {
            Name {
              title {
                plain_text
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

      {data.allNotion.nodes.map(notionPage => {
        return (
          <>
            <h1>{notionPage.properties.Name.title[0].plain_text}</h1>
            <p>{notionPage.notionId}</p>
          </>
        )
      })}
    </Layout>
  )
}

export default Notion
