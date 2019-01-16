import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Contact({ data }) {
	return (
		<Layout>
			<SEO title="Contact Chris Gibbons" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Contact</h1>
				</div>
				<div className="c-content__body">
Whether you have a question you'd like to ask, a request for me to speak at your event or you want me to help with FE or consult on your project then feel free to get in touch.

I normally respond the quickest on Twitter, so I'd recommend hitting me up on there for quick questions or to chat (DM's are open).

If you want to discuss a project, me working with you, speaking, or something longer, then please email me - though don’t be offended if it takes a day or so to reply!

* [Twitter -  @_gbbns](https://www.twitter.com/_gbbns)
* [Email - chris@gbbns.co](mailto:chris@gbbns.co)
				</div>
			</section>
		</Layout>
	)
}
