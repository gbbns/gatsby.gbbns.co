import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Header = () => (
  <StaticQuery
    query={graphql`
      query siteInfo {
        site {
          siteMetadata {
            author
            siteTitleTag
            siteDescription
            introTitle
            tagline
            siteUrl
            urlSlug
          }
        }
      }
    `}
    render={(data) => (
      <header className="o-content__sidebar">
        <Link to="/" className="c-masthead" activeClassName="is-active">
          <span className="c-masthead__item" aria-hidden="true">
            {data.site.siteMetadata.urlSlug}
          </span>
          <span className="c-masthead__item">
            {data.site.siteMetadata.author}
          </span>
          <span className="c-masthead__item">
            {data.site.siteMetadata.siteTitleTag}
            <span aria-hidden="true">/</span>
          </span>
        </Link>

        <nav className="c-navigaton">
          <ul className="c-navigation__primary">
            <li>
              <Link
                to="/about/"
                className="c-navigation__link"
                activeClassName="is-active"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to="/writing/"
                className="c-navigation__link"
                activeClassName="is-active"
              >
                Writing
              </Link>
            </li> */}
            <li>
              <Link
                to="/speaking/"
                className="c-navigation__link"
                activeClassName="is-active"
              >
                Speaking
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                className="c-navigation__link"
                activeClassName="is-active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )}
  />
)

export default Header
