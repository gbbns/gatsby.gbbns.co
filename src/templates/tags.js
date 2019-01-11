import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from '../layouts/layout'
import SEO from '../components/seo'

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
		} tagged with "${tag}"`

	return (
		<Layout>
			<SEO title="{title" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>{tagHeader}</h1>
				</div>
				<div className="c-content__body">
					<ul>
						{edges.map(({ node }) => {
							const { path, title } = node.frontmatter
							return (
								<li key={path}>
									<Link to={path}>{title}</Link>
								</li>
							)
						})}
					</ul>
					<Link to="/tags">All tags</Link>
				</div>
			</section>
		</Layout>
	)
}

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							path: PropTypes.string.isRequired,
							title: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] }, published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
