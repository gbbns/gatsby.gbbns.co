import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from '../layouts/layout'
import SEO from '../components/seo'
import { Link, graphql } from "gatsby"

const TagsPage = ({
	data: {
		allMarkdownRemark: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
		<Layout>
			<SEO title="{title" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Tags</h1>
				</div>
				<div className="c-content__body">
					<ul>
						{group.map(tag => (
							<li key={tag.fieldValue}>
								<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
									{tag.fieldValue} ({tag.totalCount})
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</Layout>
	)

TagsPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			group: PropTypes.arrayOf(
				PropTypes.shape({
					fieldValue: PropTypes.string.isRequired,
					totalCount: PropTypes.number.isRequired,
				}).isRequired
			),
		}),
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				introTitle: PropTypes.string.isRequired,
			}),
		}),
	}),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        introTitle
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
