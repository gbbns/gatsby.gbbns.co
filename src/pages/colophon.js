import React from 'react'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

export default function Colophon({ data }) {
  return (
    <Layout>
      <SEO
        title="A colophon for gbbns.co"
        keywords={[
          'colophon',
          'how this site is made',
          'gbbns.co',
          'accessibility',
        ]}
      />

      <section className="c-content">
        <div className="c-content__title">
          <h1>A colophon for gbbns.co</h1>
        </div>
        <div className="c-content__body">
          <p>Well, this is awkward.</p>
          <p>
            This is currently the third iteration of this site, every version
            has served a purpose, and served it very well.
          </p>
          <ul>
            <li>
              v1. was developed using{' '}
              <a href="https://atom.io" rel="noopener">
                Atom
              </a>
              , generated with{' '}
              <a href="https://jekyllrb.com/" rel="noopener">
                Jekyll
              </a>
              .
            </li>
            <li>
              v2. generated with{' '}
              <a href="https://gohugo.io/" rel="noopener">
                Hugo
              </a>
              .
            </li>
            <li>
              v3. is now being generated with{' '}
              <a href="https://www.gatsbyjs.org/" rel="noopener">
                the pretty awesome Gatsby
              </a>
            </li>
          </ul>
          <p>
            The site is developed using{' '}
            <a href="https://code.visualstudio.com/" rel="noopener">
              Visual Studio Code
            </a>
            .
          </p>
          <p>
            The site is hosted on{' '}
            <a href="https://github.com/gbbns/gatsby.gbbns.co" rel="noopener">
              GitHub
            </a>{' '}
            and published to{' '}
            <a href="https://www.netlify.com/" rel="noopener">
              Netlify
            </a>
          </p>
          <p>
            I will keep this page updated as I make more changes to the site.
          </p>
        </div>
      </section>
    </Layout>
  )
}
