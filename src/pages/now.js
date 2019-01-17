import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Now({ data }) {
	return (
		<Layout>
			<SEO title="So what is Chris Gibbons doing now?" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Now</h1>
				</div>
				<div className="c-content__body">
					<p>Life is a hectic affair; To help keep me sane and to give me some guidance, these are my current areas of focus:</p>

					<h2>Photography</h2>
					<p><a href="https://www.instagram.com/_gbbns" rel="noopener">Improving my photography</a>, [with my new(ish) toy](https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t1/)</p>

					<h2>Work</h2>
					<ul>
						<li>Continuing to promote and improve both of the guilds I&lsqo;ve setup &ndash; the <abbr title="Inclusive Design Guild">IDG</abbr> &amp; the <abbr title="Front End">FE</abbr> guild</li>
						<li>Devoting time out to meetup regularly with my mentor(s) for a coffee</li>
						<li>Making a better effort to attend more local industry events &amp; meetups such as <a href="https://nuxuk.org/" rel="noopener">NUX</a>, <a href="https://www.meetup.com/McrUXD/" rel="noopener">UX&amp;D</a> as well as the great events being run within <a href="https://www.autotrader.co.uk/" rel="noopener">Auto Trader</a></li>
					</ul>

					<h2>Reading</h2>
					<p>Taking part in <a href="https://www.goodreads.com/user_challenges/10861757" rel="noopener">GoodRead's reading challenge</a>.</p>

					<h2>This site</h2>
					<p>Tweaking, improving, and growing my online home.</p>

					<h2>Other</h2>
					<p>Build both my photography, and my bucket list sites.</p>

					<h2>Hopes, dreams and ambitions</h2>
					<p>Keeping my dream of going to Australia alive.</p>

					<p>Inspired by <a href="https://sivers.org/nowff" rel="noopener">Derik Sivers Now page</a>, via <a href="https://marcjenkins.co.uk/now/" rel="noopener">Marc Jenkins Now page</a>, <a href="https://nownownow.com" rel="noopener">amongst others</a>.</p>

				</div>
			</section>
		</Layout>
	)
}
