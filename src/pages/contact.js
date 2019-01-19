import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Contact({ data }) {
	return (
		<Layout>
			<SEO title="Contact Chris" keywords={['chris gibbons', 'contact chris gibbons', 'accessibility']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Get in contact with Chris</h1>
				</div>
				<div className="c-content__body">
					<p>Whether you have a question you'd like to ask, a request for me to speak at your event or you want me to help with FE or consult on your project then feel free to get in touch.</p>
					<p>I normally respond the quickest on Twitter, so I'd recommend hitting me up on there for quick questions or to chat (DM's are open).</p>
					<p>If you want to discuss a project, me working with you, speaking, or something longer, then please email me - though don’t be offended if it takes a day or so to reply!</p>
					<ul>
						<li><a href="https://www.twitter.com/_gbbns">Twitter -  @_gbbns</a></li>
						<li><a href="mailto:chris@gbbns.co">Email - chris@gbbns.co</a></li>
					</ul>
				</div>
			</section>
		</Layout>
	)
}
