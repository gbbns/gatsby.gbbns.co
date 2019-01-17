import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Colophon({ data }) {
	return (
		<Layout>
			<SEO title="gbbns.co colophon" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Site colophon</h1>
				</div>
				<div className="c-content__body">
					<p>This site ~~is built using [Atom](https://atom.io), generated with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com).~~ is built using [Visual Studio Code](https://code.visualstudio.com/), now generated with [Hugo](https://gohugo.io/), hosted on [GitHub](https://github.com/gbbns/gbbns.co) and published on [Netlify](https://www.netlify.com/), phew.</p>

					<p>Currently all pages are stripped right back to the bare bones -- and if they aren't they will be soon -- to enable me to get to grips with Hugo.</p>

					<p>[I plan on plugging in Sass, a task runner of some kind, some PostCSS goodness and at some point, a design](https://github.com/gbbns/gbbns.co/issues).</p>

					<p>I will keep this page updated as I make more changes to the site.</p>
				</div>
			</section>
		</Layout>
	)
}
