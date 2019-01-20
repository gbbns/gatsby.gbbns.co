import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import '../styles/main.scss'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Front end developer &amp; accessiblity consultant"
        keywords={[
          'chris gibbons',
          'front end developer',
          'manchester front end',
          'gatsby',
          'accessibility',
        ]}
      />
      <section className="c-content">
        <div className="c-content__title">
          <h1>{data.site.siteMetadata.introTitle}</h1>
        </div>
        <div className="c-content__body">
          <p>An experienced frontend developer based in Lancashire [53.7632° N, 2.7044° W], UK.</p>
          <p>I build fast, user friendly and accessible websites for the automotive industry, with a particular passion/obsession for well written and clean code.</p>
          <p>I’ve got over a decades experience as a front end developer and have recently found a passion for UX and accessibility. My career has been spent working for some of the top businesses—both agency and in-house—in Manchester. During this time I have been fortunate to have the chance to work on large scale, content-managed platforms for some of the largest companies in the UK</p>
          <p>I also like to <Link to="/writing/">write</Link> and <a href="https://www.instagram.com/_gbbns" rel="noopener">take pictures</a>, amongst other things.</p>
        </div>
      </section>
      <section className="c-content">
        {posts
          .filter(
            post =>
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
                <p className="c-content__meta">
                  Written about {post.frontmatter.date}
                </p>
                <p>{post.excerpt}</p>
              </article>
            )
          })}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        introTitle
      }
    }
    allMarkdownRemark(
      limit: 5
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
