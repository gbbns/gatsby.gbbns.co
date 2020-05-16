import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import '../styles/main.scss'

export default function Writing({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="What is Chris Gibbons writing?"
        keywords={['chris gibbons', 'blog articles', 'gatsby']}
      />

      <section className="c-content">
        <div className="c-content__title">
          <h1>Writing</h1>
        </div>
        <div className="c-content__body">
          {posts
            .filter(
              (post) =>
                post.node.frontmatter.title.length > 0 &&
                post.node.frontmatter.published
            )
            .map(({ node: post }) => {
              return (
                <article className="c-content__body" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{post.frontmatter.date}</p>
                  <p>{post.excerpt}</p>
                </article>
              )
            })}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query WritingQuery {
    site {
      siteMetadata {
        introTitle
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
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
