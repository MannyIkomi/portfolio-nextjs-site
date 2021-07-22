const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions }) => {
  // console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise

  // get data for each project
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allPrismicProject {
        nodes {
          slugs
        }
      }
    }
  `)

  // generate pages for each project
  data.allPrismicProject.nodes.forEach(node => {
    const slug = node.slugs[0]

    createPage({
      path: `/${slug}`, 
      component: path.resolve("src/templates/ProjectTemplate.jsx"),
      context: { slug },
    })
    // console.log(JSON.stringify(node, null, 4))
  })
}
