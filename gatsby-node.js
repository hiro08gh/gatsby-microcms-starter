const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsBlog(limit: 1000) {
          edges {
            node {
              id
              blogId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // ブログの個別ページ作成
  const blogTemplate = path.resolve("./src/templates/blog.js")
  result.data.allMicrocmsBlog.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.blogId}`,
      component: blogTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
