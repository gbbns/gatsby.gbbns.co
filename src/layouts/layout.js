import React from 'react'

import Header from '../components/header'
import { Colophon } from '../components/colophon';

const Layout = ({ children}) => {
	return (
		<main className="o-content">
			<Header />
			<Colophon />
			<section className="o-content__body">
				{children}
			</section>
		</main>
	)
}

export default Layout
