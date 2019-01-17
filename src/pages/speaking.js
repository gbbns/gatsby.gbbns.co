import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Speaking({ data }) {
	return (
		<Layout>
			<SEO title="Speaking events" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>Speaking</h1>
				</div>
				<div className="c-content__body">
					<h2>Upcoming talks</h2>
					<ul>
						<li><a href="https://uxscotland.net/2019/sessions/index.php?session=97" rel="noopener">UX Scotland - 13th June 2019 - Edinburgh: "And in the beginning there was HTML"</a></li>
					</ul>

					<h2>Previous talks</h2>
					<ul>
						<li><a href="https://uxscotland.net/2018/sessions/index.php?session=93" rel="noopener">UX Scotland - 14th June 2018 - Edinburgh: "How we became accidental accessibility champions, and how you could too!"</a></li>
						<li><a href="https://www.wearesigma.com/campdigital/2018/chris-gibbons/" rel="noopener">Camp Digital - 2nd May 2018 - Manchester: "Accidentally becoming accessibility champions"</a></li>
						<li><a href="https://www.meetup.com/frontenders-valtech/events/247610703/" rel="noopener">Front Enders - Thursday 15th March - London: "Our adventures with pattern libraries"</a></li>

					</ul>


					<a href="mailto:chris@gbbns.co" rel="noopener">Please send me an email if you’d like me to speak at your event.</a>
				</div>
			</section>
		</Layout>
	)
}
