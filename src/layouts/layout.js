import React from 'react'

import Header from '../components/header'
import Colophon from '../components/colophon'
import { Footer } from '../components/footer'

const Layout = ({ children }) => {
  return (
    <main className="o-content">
      <Header />
      <Colophon />
      <section className="o-content__body">{children}</section>
      <Footer />
    </main>
  )
}

export default Layout
