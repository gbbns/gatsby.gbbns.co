import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<SEO title={frontmatter.title} keywords={['gatsby', 'application', 'react']} />
			<div className="c-content">
				<div className="c-content__title">
					<h1>{frontmatter.title}</h1>
				</div>
				<div className="c-content__body">
					<div className="c-content__meta">
						<ul>
							<li>by {frontmatter.author}</li>
							<li>{frontmatter.date}</li>
							<li>{markdownRemark.timeToRead} {markdownRemark.timeToRead > 1 ? 'mins' : 'min'} to read</li>
						</ul>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: html }}
					/>
					<footer>
						<p>
							<small>Page last updated: {markdownRemark.parent.mtime}</small>
						</p>
					</footer>
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
			parent {
				... on File {
					mtime(fromNow: true)
				}
			}
			html
			timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
				title
				author
      }
    }
  }
`
