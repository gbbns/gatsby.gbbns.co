/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve(`src/pages/article.js`)

	return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
							path
							published
            }
          }
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}
		const allPosts = result.data.allMarkdownRemark.edges;
		// const allowedPosts = allPosts.filter(post =>
		// 	(process.env.NODE_ENV === 'development'
		// 		|| post.node.frontmatter.published));
		const allowedPosts = allPosts.filter(post => (post.node.frontmatter.published));

		allowedPosts.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}, // additional data can be passed via context
			})
		})
	})
}
