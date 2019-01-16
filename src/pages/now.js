import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Now({ data }) {
	return (
		<Layout>
			<SEO title="What is Chris Gibbons doing now?" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Now</h1>
				</div>
				<div className="c-content__body">
					Life is a hectic affair; To help keep me sane and to give me some guidance, these are my current areas of focus:

					## Photography
<a href="https://www.instagram.com/_gbbns" rel="noopener">Improving my photography</a>, [with my new(ish) toy](https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t1/)

					## Work
* Continuing to promote and improve both of the guilds I&lsqo;ve setup &ndash; the <abbr title="Inclusive Design Guild">IDG</abbr> &amp; the <abbr title="Front End">FE</abbr> guild
			* Devoting time out to meetup regularly with my mentor(s) for a coffee
* Making a better effort to attend more local industry events &amp; meetups such as <a href="https://nuxuk.org/" rel="noopener">NUX</a>, <a href="https://www.meetup.com/McrUXD/" rel="noopener">UX&amp;D</a> as well as the great events being run within <a href="https://www.autotrader.co.uk/" rel="noopener">Auto Trader</a>

			## Reading
Taking part in <a href="https://www.goodreads.com/user_challenges/10861757" rel="noopener">GoodRead's reading challenge</a>.

			## This site
			Tweaking, improving, and growing my online home.

			## Other
			Build both my photography, and my bucket list sites.

			## Hopes, dreams and ambitions
			Keeping my dream of going to Australia alive.

Inspired by <a href="https://sivers.org/nowff" rel="noopener">Derik Sivers Now page</a>, via <a href="https://marcjenkins.co.uk/now/" rel="noopener">Marc Jenkins Now page</a>, <a href="https://nownownow.com" rel="noopener">amongst others</a>.

				</div>
			</section>
		</Layout>
	)
}
