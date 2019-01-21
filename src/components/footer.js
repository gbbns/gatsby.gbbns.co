import React from 'react'
import { Link } from 'gatsby'

export const Footer = () => {
  const copyrightYear = new Date().getFullYear()
  return (
    <footer className="c-footer">
      <div className="card card--message">
        <h4>
          As you've probably spotted I'm designing &amp; building this site
          "live" and iteratively.
        </h4>
        <p>
          In the true sprit of Agile, I believe that coding in the open promotes
          sharing, enables better and faster feedback and provides a great
          opportunity for learning.
        </p>
        <p>
          Because of this things will inevitably change and possibly break but
          that's more than ok, you can{' '}
          <a href="mailto:chris@gbbns.co" rel="noopener">
            email me to let me know
          </a>{' '}
          if you spot anything.
        </p>
        <p>
          In the meantime feel free to browse{' '}
          <a href="https://github.com/gbbns/gatsby.gbbns.co" rel="noopener">
            the source code
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/gbbns/gatsby.gbbns.co/commits/master"
            rel="noopener"
          >
            commit history
          </a>
          , and if you like{' '}
          <a
            href="https://github.com/gbbns/gatsby.gbbns.co/issues"
            rel="noopener"
          >
            raise an issue
          </a>
          !
        </p>
      </div>

      <p>
        <a href="mailto:chris@gbbns.co" rel="noopener">
          chris@gbbns.co
        </a>
      </p>

      <nav>
        <ul className="h-list">
          <li className="h-list__item">
            <Link to="/colophon" activeClassName="is-active">
              Colophon
            </Link>
          </li>
          <li className="h-list__item">
            <Link to="/now" activeClassName="is-active">
              Now
            </Link>
          </li>
          <li className="h-list__item">
            <Link to="/uses" activeClassName="is-active">
              Uses
            </Link>
          </li>
          <li className="h-list__item">
            <Link to="/tags" activeClassName="is-active">
              Tags
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="h-list ">
        <li className="h-list__item">
          <a href="https://github.com/gbbns" rel="noopener">
            GitHub
          </a>
        </li>
        <li className="h-list__item">
          <a href="https://www.instagram.com/_gbbns" rel="noopener">
            Instagram
          </a>
        </li>
        <li className="h-list__item">
          <a href="https://twitter.com/_gbbns" rel="noopener">
            Twitter
          </a>
        </li>
        <li className="h-list__item">
          <a href="https://uk.linkedin.com/in/gbbns" rel="noopener">
            LinkedIn
          </a>
        </li>
        <li className="h-list__item">
          <a href="https://500px.com/gbbns" rel="noopener">
            500px
          </a>
        </li>
      </ul>

      <p>
        Copyright &copy; {copyrightYear} Chris Gibbons - All rights reserved.
      </p>
    </footer>
  )
}
