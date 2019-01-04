import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            introTitle
          }
        }
      }
    `}
		render={data => (
			<main>
				<Header />
				<section>
					<h1>{data.site.siteMetadata.introTitle}</h1>
					{children}
				</section>
			</main>
		)}
	/>
)

export default Layout
