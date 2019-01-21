import React from 'react'
import { Link } from 'gatsby'

export const Colophon = () => {
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
        <li className="c-colophon__items">Built using: Visual Studio Code</li>
        <li className="c-colophon__items">Generated with: gatsby</li>
        <li className="c-colophon__items">Hosted on: Github</li>
        <li className="c-colophon__items">Published on: Netlify</li>
        <li className="c-colophon__items">Background colour: #000000 </li>
        <li className="c-colophon__items">Typeface: Space Mono</li>
        <li className="c-colophon__items">H1 colour: #272727</li>
        <li className="c-colophon__items">H2 colour: #FFFFFF</li>
        <li className="c-colophon__items">Bodycopy colour: #A3A3A3</li>
				<li className="c-colophon__items">Theme: Light / Dark</li>
      </ul>
    </aside>
  )
}
