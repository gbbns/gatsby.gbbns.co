import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function About({ data }) {
  return (
    <Layout>
      <SEO
        title="About Chris Gibbons"
        keywords={['profile', 'chris gibbons', 'about chris', 'accessibility']}
      />

      <section className="c-content">
        <div className="c-content__title">
          <h1>About this chap called Chris Gibbons</h1>
        </div>
        <div className="c-content__body">
          <h2>What I do &amp; specialise in</h2>
          <ul>
            <li>HTML</li>
            <li>CSS (Sass)</li>
            <li>Responsive &amp; Mobile-first</li>
            <li>UI/UX</li>
            <li>JavaScript (ES5+)</li>
            <li>Web Standards</li>
            <li>Web Accessibility</li>
          </ul>
          <h2>What I don&rsquo;t do or don&rsquo;t do a lot of</h2>
          <ul>
            <li>Backend development</li>
            <li>Heavy JavaScript</li>
            <li>OOP</li>
            <li>Fix printers (or other bits of IT equipment)</li>
          </ul>
          <hr />
          <h2>A potted history</h2>
          <p>
            Chris Gibbons is an experienced digital developer specialising in
            traditional front-end development practises, UI/UX and mobile.
          </p>
          <p>
            He has a passion/mild obsession for well written, semantic &amp;
            accessible code. He enjoys the challenge of learning and using new
            and emerging technologies to better projects, as well as delivering
            cross-device, compliant, usable websites.
          </p>
          <p>
            He also hates speaking about himself in the third person, so lets
            stop.
          </p>
          <p>
            After working with the amazing folk at{' '}
            <a href="https://www.codecomputerlove.com/" rel="noopener">
              Code Computerlove
            </a>{' '}
            for nearly 8 years, working my way up to Snr. Front End developer, I
            then spent the next 12 months working as a UI engineer at{' '}
            <a href="https://www.zuto.com" rel="noopener">
              Zuto
            </a>{' '}
            where I enjoyed the challenge of trying to build a bridge between
            front-end and UX in the world of car finance.
          </p>
          <p>
            I now spend my time happily employed by the nice folk at{' '}
            <a href="https://www.autotrader.co.uk/" rel="noopener">
              Auto Trader
            </a>{' '}
            as a Principal UX/UI developer and an advocate of accessibility
            &amp; inclusive design.
          </p>
          <p>
            Outside of work I live close to the seaside resort of{' '}
            <a href="https://en.wikipedia.org/wiki/Blackpool" rel="noopener">
              Blackpool
            </a>{' '}
            and, in my small amount of spare time, like to take photographs
            &mdash;{' '}
            <a href="https://www.instagram.com/_gbbns" rel="noopener">
              Instagram
            </a>{' '}
            &mdash; bake cakes and support Liverpool FC.
          </p>
          <h3>UX Technologist?</h3>
          <p>A UX what now?</p>
          <p>OK, let me explain.</p>
          <p>
            I&rsquo;ve been trying to find an accurate description for myself
            within the front end (FE) arena for a number years now, especially
            with the lines of what is expected of a FE-er becoming blurrier.
          </p>
          <p>
            It&rsquo;s no exaggeration to say that the FE landscape has changed
            dramatically in the 15 years I&rsquo;ve been in the industry.Task
            runners such as Grunt and Gulp weren&rsquo;t even twinkles in the
            eyes of the people who concieved the ideas. Object orientated
            approaches to frameworks such as Angular and React are commonplace
            and expected skills to have. Accessibility &amp; inclusive design is
            rightly gaining in prominence, but not enough for my liking!
          </p>
          <p>
            Now the parts of FE I particularly enjoy is around the UI layer and
            the crafting of a great experience, this along side prototyping
            &amp; discovery (mainly as I get to play)
          </p>
          <p>
            In my opinion--and after doing a few Google searches it seems there
            are many other people thinking the same--a UX technologist works to
            bridge the gap between design and engineering.
          </p>
          <p>
            <a
              href="https://adaptivepath.org/ideas/what-makes-a-design-technologist/"
              rel="noopener"
            >
              One of the best posts I read on this topic is from Dan Harrelson
              at Adaptive Path
            </a>
            .
          </p>
          <ul>
            <li>
              A comfort level with front-end programming (web, desktop, mobile,
              device)
            </li>
            <li>
              A tool belt filled with techniques for creating interactive apps
            </li>
            <li>The ability to quickly pick up new tools</li>
            <li>A itch to dive into code and &ldquo;just built it&rdquo;</li>
          </ul>
          <p>These all appear to reflect where I feel I add most value.</p>
          <p>But it was the following:</p>
          <blockquote>
            <p>
              You also need to find that special someone who appreciates design
              and wants to be a member of the UX team.
            </p>
          </blockquote>
          <p>
            That <em>really</em> sums up my current feelings to FE and my
            position.
          </p>
        </div>
      </section>
    </Layout>
  )
}
