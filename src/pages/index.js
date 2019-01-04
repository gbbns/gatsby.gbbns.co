import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Index({ data }) {
	const { edges: posts } = data.allMarkdownRemark
	return (
		<Layout>
			<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
			<div>
				<p>An experienced frontend developer based in Lancashire [53.7632° N, 2.7044° W], UK.</p>
				<p>I build fast, user friendly and accessible websites for the automotive industry, with a particular passion/obsession for well written and clean code.</p>
				<p>I’ve got over a decades experience as a front end developer and have recently found a passion for UX and accessibility. My career has been spent working for some of the top businesses—both agency and in-house—in Manchester. During this time I have been fortunate to have the chance to work on large scale, content-managed platforms for some of the largest companies in the UK</p>
				<p>I also like to write and take pictures, amongst other things.</p>
			</div>
			<div>
				{posts
					.filter(post => post.node.frontmatter.title.length > 0 && post.node.frontmatter.published)
					.map(({ node: post }) => {
						return (
							<div key={post.id}>
								<h1>
									<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
								</h1>
								<h2>{post.frontmatter.date}</h2>
								<p>{post.excerpt}</p>
							</div>
						)
					})}
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
  query IndexQuery {
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						excerpt(pruneLength: 250)
						id
						frontmatter {
							title
							date(fromNow: true)
							path
							author
							published
						}
					}
				}
			}
  }
`
