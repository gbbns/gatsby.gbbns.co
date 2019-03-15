import React from 'react'
import { Link } from 'gatsby'

const Colophon = () => {
  return (
    <aside className="c-colophon">
      <h3>
        <Link
          to="/colophon"
          className="c-colophon__link"
          activeClassName="is-active"
        >
          Colophon
        </Link>
      </h3>
      <ul className="c-colophon__list">
        <li className="c-colophon__items">
          Built using:{' '}
          <a href="https://code.visualstudio.com/" rel="noopener">
            Visual Studio Code
          </a>
        </li>
        <li className="c-colophon__items">
          Generated with:{' '}
          <a href="https://gatsbyjs.org" rel="noopener">
            Gatsby
          </a>
        </li>
        <li className="c-colophon__items">
          Hosted on:{' '}
          <a href="https://github.com/gbbns/gatsby.gbbns.co" rel="noopener">
            Github
          </a>
        </li>
        <li className="c-colophon__items">
          Published on:{' '}
          <a href="https://www.netlify.com/" rel="noopener">
            Netlify
          </a>
        </li>
        <li className="c-colophon__items">Background colour: #000000 </li>
        <li className="c-colophon__items">Typeface: Space Mono</li>
        <li className="c-colophon__items">H1 colour: #272727</li>
        <li className="c-colophon__items">H2 colour: #FFFFFF</li>
        <li className="c-colophon__items">Bodycopy colour: #A3A3A3</li>
        {/* <li className="c-colophon__items">Theme: <button onClick={this.handleClick}>Light</button></li>
					<li className="c-colophon__items">Theme: <button onClick={this.handleClick}>Dark</button></li>
					<li className="c-colophon__items">Theme: <button onClick={this.handleClick}>Bad Ass Orange</button></li> */}
      </ul>
    </aside>
  )
}

export default Colophon
