import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

import kebabCase from 'lodash'
import moment from 'moment'
import { LastUpdated } from '../components/last-updated'

import '../styles/main.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const frontMatterTags = frontmatter.tags

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={['gatsby', 'application', 'react']}
      />
      <div className="c-content">
        <div className="c-content__title">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="c-content__body">
          <div className="c-content__meta">
            <ul className="c-content__meta-items">
              <li className="c-content__meta-item">by {frontmatter.author}</li>
              <li className="c-content__meta-item">{frontmatter.date}</li>
              <li className="c-content__meta-item">
                {markdownRemark.timeToRead}{' '}
                {markdownRemark.timeToRead > 1 ? 'mins' : 'min'} to read
              </li>
            </ul>
            {frontMatterTags && frontMatterTags.length > 0 && (
              <ul className="c-content__meta-tags">
                {frontmatter.tags.map((tag, index) => {
                  return (
                    <li className="c-content__meta-tags-item">
                      <Link
                        to={`/tags/${kebabCase(tag)}`}
                        className="c-content__meta-tag"
                        key={index}
                      >
                        {`${kebabCase(tag)}`}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <LastUpdated
            dateTime={markdownRemark.parent.mtime}
            lastUpdated={moment(markdownRemark.parent.mtime).fromNow()}
          />
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
          mtime
        }
      }
      html
      id
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        tags
      }
    }
  }
`
