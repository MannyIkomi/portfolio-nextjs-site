const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  console.log(actions)

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

  data.allStrapiProjects.nodes.forEach(node => {
    const slug = node.slug
    createPage({
      path: `/${slug}`,
      component: path.resolve("src/templates/project.jsx"),
      context: { slug },
    })
    console.log(JSON.stringify(node, null, 4))
  })
}
