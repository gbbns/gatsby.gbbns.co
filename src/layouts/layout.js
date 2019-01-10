import React from 'react'

import Header from '../components/header'

const Layout = ({ children}) => {
	return (
		<main className="o-content">
			<Header />
			<section className="o-content__body">
				{children}
			</section>
		</main>
	)
}

export default Layout
