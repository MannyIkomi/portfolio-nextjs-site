require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")
const { Client } = require("@notionhq/client")
const { get } = require("http")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DB_ID
const NOTION_NODE_TYPE = "Notion"

exports.onCreateNode = ({ node, actions }) => {
  // node.internal.type === 'Notion' && console.log(node)
}

async function getNotionDatabase(databaseId, notionClient = Notion){
  return notionClient.databases.query({ database_id: databaseId })
}

async function getNotionPage(pageId, notionClient = Notion){
 return notionClient.pages.retrieve({ page_id: pageId })
}

async function getNotionBlockChildren(blockId, notionClient = Notion){
  // need to traverse children of child blocks using recursion
  let blockChildren = null 
  const response = await notionClient.blocks.children.list({
    block_id: blockId,
  })
  blockChildren = response
  
  // if (blockChildren.results.some(block => block.has_children)) {
    // let nestedBlocks
  //   nestedBlocks = blockchildren.results.map(async (block) => {
  //     nestedBlocks = await getNotionBlockChildren(block.id)
  //     return block.results = nestedBlocks
  //   })

  //   blockChildren = {...nestedBlock}
  // }
  console.log(JSON.stringify(blockChildren, null, 2))
  return blockChildren
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  
  const database = await getNotionDatabase(databaseId, Notion)

  const pages = await Promise.all(database.results.map(async (databaseEntry) => {
    const page = await getNotionPage(databaseEntry.id, Notion)
    const pageBlocks = await getNotionBlockChildren(page.id, Notion)
    const pageWithContents = Object.assign(page, { content: pageBlocks })

    return pageWithContents

  }))

  pages.forEach(notionPage => {
      const node = {
        // notion page data
        notionId: notionPage.id,
        json: JSON.stringify(notionPage),
        ...notionPage,

        // required
        id: createNodeId(`${NOTION_NODE_TYPE}-${notionPage.id}`),
        parent: null,
        children: [],
        internal: {
          type: NOTION_NODE_TYPE,
          contentDigest: createContentDigest(notionPage)
        },
      }
      actions.createNode(node)
    
  })
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise

  // get data for each project
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allPrismicProject {
        nodes {
          id
          uid
        }
      }
    }
  `)

  // generate pages for each project
  data.allPrismicProject.nodes.forEach(node => {
    const slug = node.uid

    createPage({
      path: `/${slug}`, 
      component: path.resolve("src/templates/ProjectTemplate.jsx"),
      context: { uid: slug },
    })
    // console.log(JSON.stringify(node, null, 4))
  })
}
