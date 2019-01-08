import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<SEO title="{frontmatter.title}" keywords={['gatsby', 'application', 'react']} />
			<div className="c-content">
				<div className="c-content__body">
					<h1>
						<span>{frontmatter.title}</span>
						<span>&mdash;{frontmatter.author}</span>
					</h1>
					<h2>{frontmatter.date}</h2>
					<div
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
				title
				author
      }
    }
  }
`
