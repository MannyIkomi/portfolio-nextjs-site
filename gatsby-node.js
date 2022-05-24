require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")
const { Client } = require("@notionhq/client")
const slugify = require("slugify")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DB_ID
const NOTION_NODE_TYPE = "Notion"

exports.onCreateNode = ({ node, actions }) => {
  // node.internal.type === 'Notion' && console.log(node)
}

async function getNotionDatabase(databaseId, notionClient = Notion) {
  return notionClient.databases.query({ database_id: databaseId })
}

async function getNotionPage(pageId, notionClient = Notion) {
  return notionClient.pages.retrieve({ page_id: pageId })
}

async function getNotionBlockChildren(blockId, notionClient = Notion) {
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
  return blockChildren
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const database = await getNotionDatabase(databaseId, Notion)

  const pages = await Promise.all(
    database.results.map(async databaseEntry => {
      const page = await getNotionPage(databaseEntry.id, Notion)
      const pageBlocks = await getNotionBlockChildren(page.id, Notion)
      // TODO: paginate block children responses https://developers.notion.com/reference/get-block-children

      const pageWithContents = Object.assign(page, {
        content: pageBlocks.results,
      })

      return pageWithContents
    })
  )

  pages.forEach(notionPage => {
    notionPage.content.forEach(notionBlock => {
      const block = {
        notionId: notionBlock.id,
        json: JSON.stringify(notionBlock),
        ...notionBlock,

        // required
        id: createNodeId(`${NOTION_NODE_TYPE}-${notionBlock.id}`),
        parent: createNodeId(`${NOTION_NODE_TYPE}-${notionPage.id}`),
        children: [], // TODO: add support for blocks with nested block content
        internal: {
          type: `${NOTION_NODE_TYPE}Block_${notionBlock.type}`,
          contentDigest: createContentDigest(notionBlock),
        },
      }
      console.log(notionBlock)
      actions.createNode(block)
    })

    const page = {
      // notion page data
      notionId: notionPage.id,
      json: JSON.stringify(notionPage),
      ...notionPage,

      // required
      id: createNodeId(`${NOTION_NODE_TYPE}-${notionPage.id}`),
      parent: null,
      children: notionPage.content.map(block =>
        createNodeId(`${NOTION_NODE_TYPE}-${block.id}`)
      ),
      internal: {
        type: `${NOTION_NODE_TYPE}Page`,
        contentDigest: createContentDigest(notionPage),
      },
    }
    actions.createNode(page)
  })
}
exports.onCreateNode = async ({ node, actions }) => {}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise

  // get data for each project
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allNotionPage {
        nodes {
          id
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

  // generate pages for each project
  data.allNotionPage.nodes.forEach(node => {
    const { id, properties } = node
    const slug = slugify(properties.Name.title[0].plain_text)
    createPage({
      path: `/${slug}`,
      component: path.resolve("src/templates/ProjectTemplate.jsx"),
      context: { uid: id },
    })
    // console.log(JSON.stringify(node, null, 4))
  })
}
