import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function About({ data }) {
	return (
		<Layout>
			<SEO title="About Chris Gibbons" keywords={['gatsby', 'application', 'react']} />

			<section className="c-content">
				<div className="c-content__title">
					<h1>About</h1>
				</div>
				<div className="c-content__body">
					## TL;DR
					### What I do & specialise in

					* HTML
					* CSS (Sass)
					* Responsive &amp; Mobile-first
					* UI/UX
					* JavaScript (ES5+)
					* Web Standards
					* Web Accessibility

					### What I don't do or don't do a lot of

					* Backend development
					* Design
					* Heavy JavaScript
					* OOP
					* Fix printers (or other bits of IT equipment)


					## A potted history
					Chris Gibbons is an experienced digital developer specialising in traditional front-end development practises, UI/UX and mobile.

					He has a passion/mild obsession for well written, semantic &amp; accessible code. He enjoys the challenge of learning and using new and emerging technologies to better projects, as well as delivering cross-device, compliant, usable websites.

					He also hates speaking about himself in the third person, so lets stop.

After working with the amazing folk at <a href="https://www.codecomputerlove.com/" rel="noopener">Code Computerlove</a> for nearly 8 years, working my way up to Snr. Front End developer, I then spent the next 12 months working as a UI engineer at <a href="https://www.zuto.com" rel="noopener">Zuto</a> where I enjoyed the challenge of trying to build a bridge between front-end and UX in the world of car finance.

I now spend my time happily employed by the nice folk at <a href="https://www.autotrader.co.uk/" rel="noopener">Auto Trader</a> as a Principal UX/UI developer and an advocate of accessibility &amp; inclusive design.

Outside of work I live close to the seaside resort of <a href="https://en.wikipedia.org/wiki/Blackpool" rel="noopener">Blackpool</a> and, in my small amount of spare time, like to take photographs &mdash; <a href="https://www.instagram.com/_gbbns" rel="noopener">Instagram</a> &mdash; bake cakes and support Liverpool FC.

					### UX Technologist?
					A UX what now?

					OK, let me explain.

					I've been trying to find an accurate description for myself within the front end (FE) arena for a number years now, especially with the lines of what is expected of a FE-er becoming blurrier.

					It's no exaggeration to say that the FE landscape has changed dramatically in the 15 years I've been in the industry. Task runners such as Grunt and Gulp weren't even twinkles in the eyes of the people who concieved the ideas. Object orientated approaches to frameworks such as Angular and React are commonplace and expected skills to have. Accessibility &amp; inclusive design is rightly gaining in prominence, but not enough for my liking!

					Now the parts of FE I particularly enjoy is around the UI layer and the crafting of a great experience, this along side prototyping & discovery (mainly as I get to play)

					In my opinion--and after doing a few Google searches it seems there are many other people thinking the same--a UX technologist works to bridge the gap between design and engineering.

<a href="https://adaptivepath.org/ideas/what-makes-a-design-technologist/" rel="noopener">One of the best posts I read on this topic is from Dan Harrelson at Adaptive Path</a>.

					* A comfort level with front-end programming (web, desktop, mobile, device)
					* A tool belt filled with techniques for creating interactive apps
					* The ability to quickly pick up new tools
					* A itch to dive into code and &ldquo;just built it&rdquo;

					These all appear to reflect where I feel I add most value.

					But it was the following:

					>You also need to find that special someone who appreciates design and wants to be a member of the UX team.

					That _really_ sums up my current feelings to FE and my position.
				</div>
			</section>
		</Layout>
	)
}
