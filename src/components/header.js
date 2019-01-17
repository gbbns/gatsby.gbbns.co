import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

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

		render={data => (
			<header className="o-content__sidebar">
				<Link to="/"
							className="c-masthead"
							activeClassName="is-active">
					<span className="c-masthead__item">{data.site.siteMetadata.urlSlug}</span>
					<span className="c-masthead__item">{data.site.siteMetadata.author}</span>
					<span className="c-masthead__item">{data.site.siteMetadata.siteTitleTag}/</span>
				</Link>

				<nav className="c-navigaton">
					<ul className="c-navigation__primary">
						<li>
							<Link to="/about/"
										className="c-navigation__link"
										activeClassName="is-active">About</Link>
						</li>
						<li>
							<Link to="/writing/"
								className="c-navigation__link"
								activeClassName="is-active">Writing</Link>
						</li>
						<li>
							<Link to="/speaking/"
										className="c-navigation__link"
										activeClassName="is-active">Speaking</Link>
						</li>
						<li>
							<Link to="/contact/"
								className="c-navigation__link"
								activeClassName="is-active">Contact</Link>
						</li>
					</ul>
				</nav>

				<aside className="c-colophon">
					<h3>
						<Link to="/colophon"
									className="c-colophon__link"
									activeClassName="is-active">
							Colophon
						</Link>
					</h3>
					<ul className="c-colophon__list">
						<li className="c-colophon__items">Built using: Visual Studio Code</li>
						<li className="c-colophon__items">Generated with: gatsby</li>
						<li className="c-colophon__items">Hosted on: Github</li>
						<li className="c-colophon__items">Published on: Netlify</li>
						<li className="c-colophon__items">Background colour: #000000 </li>
						<li className="c-colophon__items">Typeface: Space Mono</li>
						<li className="c-colophon__items">H1 colour: #272727</li>
						<li className="c-colophon__items">H2 colour: #FFFFFF</li>
						<li className="c-colophon__items">Bodycopy colour: #A3A3A3</li>
						<li className="c-colophon__items">Background image: On / Off</li>
					</ul>
				</aside>

			</header>
		)}
	/>
)

export default Header
