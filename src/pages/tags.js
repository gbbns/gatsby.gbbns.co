import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { introTitle },
    },
  },
}) => (
  <Layout>
    <SEO title="Tags list for blog articles on gbbns.co" />

    <section className="c-content">
      <div className="c-content__title">
        <h1>Tags listing</h1>
      </div>
      <div className="c-content__body">
        <ul>
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}({tag.totalCount})
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
