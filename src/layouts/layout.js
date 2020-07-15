import React, { useState, useEffect } from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Header from '../components/header'
import Colophon from '../components/colophon'
import { Footer } from '../components/footer'

const Layout = ({ children }) => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <PageTransition
      defaultStyle={{
        transition: isClient && `opacity 500ms ease-in-out`,
        opacity: isClient && 0,
      }}
      transitionTime={500}
    >
      <main className="o-content">
        <Header />
        <Colophon />
        <section className="o-content__body">{children}</section>
        <Footer />
      </main>
    </PageTransition>
  )
}

export default Layout
