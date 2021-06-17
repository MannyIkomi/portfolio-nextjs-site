require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")
const { Client } = require("@notionhq/client")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions }) => {
  node.internal.type === 'Notion' && console.log(node)
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = process.env.NOTION_DB_ID
  const NOTION_NODE_TYPE = "Notion"
  
  const response = notion.databases.query({ database_id: databaseId })
  
  response.then(data => {

    data.results.forEach(notionPage => {
      const node = {
        // required
        id: createNodeId(`${NOTION_NODE_TYPE}-${notionPage.id}`),
        parent: null,
        children: [],
        internal: {
          type: NOTION_NODE_TYPE,
          content: JSON.stringify(notionPage),
          contentDigest: createContentDigest(notionPage)
        },
        // actual data
        json: JSON.stringify(notionPage),
        properties: notionPage.properties
      }

      console.log(JSON.stringify(node, null, 2));
      actions.createNode(node)
    })
  })    
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise

  // get data for each project
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `)

  // generate pages for each project
  data.allStrapiProjects.nodes.forEach(node => {
    const slug = node.slug
    createPage({
      path: `/${slug}`,
      component: path.resolve("src/templates/ProjectTemplate.jsx"),
      context: { slug },
    })
    // console.log(JSON.stringify(node, null, 4))
  })
}
