import React from 'react'

import { graphql, Link, StaticQuery } from 'gatsby'
import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

const pageQuery = graphql`
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

const Index = () => (
  <StaticQuery
    query={pageQuery}
    render={(data) => {
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
              'ux technologist',
              'front end developer manchester',
              'gbbns',
              'gibbons',
            ]}
          />
          <section className="c-content">
            <div className="c-content__title">
              <h1>{data.site.siteMetadata.introTitle}</h1>
            </div>
            <div className="c-content__body">
              <p>
                An experienced digital developer based in Lancashire [53.7632°
                N, 2.7044° W], UK, specialising in the &ldquo;lost art&rdquo; of
                traditional front-end development practises, with a long time
                obsession for well written, semantic & accessible code.
              </p>
              <p>
                I’ve got <strike>over a decades</strike> lots experience as a
                front end developer and have strong passion for good clean UX
                and accessibility.
              </p>
              <p>
                My career has been spent working for some of the top
                businesses—both agency and in-house—in Manchester. During this
                time I have been fortunate to have the chance to work on large
                scale, content-managed platforms for some of the largest
                companies in the UK
              </p>
              <p>
                Currently plying my trade as a lead front-end engineer working
                on design systems at Co-op.
              </p>
              <p>
                I also like to{' '}
                {/* <Link to="/writing/">write</Link>, and occasionally{' '} */}
                <a href="https://www.instagram.com/_gbbns" rel="noopener">
                  take pictures
                </a>
                .
              </p>
            </div>
          </section>
          <section className="c-content">
            <article className="c-content__body">
              <h2>Notice</h2>
              <p>
                I'm have a tidy up of old blog posts and pages, so for now I've
                taken them down, they will return at somepoint...
              </p>
            </article>
          </section>
          {/* <section className="c-content">
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
                    <p className="c-content__meta">
                      Written about {post.frontmatter.date}
                    </p>
                    <p>{post.excerpt}</p>
                  </article>
                )
              })}
          </section> */}
        </Layout>
      )
    }}
  />
)

export default Index
