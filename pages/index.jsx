// https://nextjs.org/docs/
import React from 'react'
import HtmlHead from '../components/head'
import { MobileNav, getPages } from '../components/navigation.jsx'
import Gallery from '../components/gallery/gallery.jsx'
import '../sass/base.scss'
// import { Head as NextHead } from 'next/head'

const Home = props => {
  return (
    <React.Fragment>
      <HtmlHead pageTitle={'Welcome! 🤓 — Manny Ikomi'} />

      {/* <MobileNav /> */}
      <main>
        <Gallery id={'identity'} />
        <Gallery id="ui" />
        <Gallery id="other" />
      </main>
      {/* Categorize <Gallery/> by #ui, #Identity Design, and #Other Works */}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Home
