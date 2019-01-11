/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	const postTemplate = path.resolve('src/templates/article.js');
	const tagTemplate = path.resolve("src/templates/tags.js")

	return graphql(`{
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					parent {
						... on File {
							mtime(fromNow: true)
						}
					}
					html
					id
					frontmatter {
						path
						published
						title
						date
						tags
					}
				}
			}
		}
	}`)
	.then(result => {
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
				component: postTemplate,
				context: {}, // additional data can be passed via context
			})
		})

		// Tag pages:
		let tags = []
		// Iterate through each post, putting all found tags into `tags`
		_.each(allowedPosts, edge => {
			if (_.get(edge, "node.frontmatter.tags")) {
				tags = tags.concat(edge.node.frontmatter.tags)
			}
		})
		// Eliminate duplicate tags
		tags = _.uniq(tags)

		// Make tag pages
		tags.forEach(tag => {
			createPage({
				path: `/tags/${_.kebabCase(tag)}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			})
		})

	})
}
