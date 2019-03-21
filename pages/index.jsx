// https://nextjs.org/docs/
import React, { Component } from 'react'
import HtmlHead from '../components/head'
import {
  MobileNav,
  MenuBar,
  MenuNav,
  MenuButton
} from '../components/navigation.jsx'
import Gallery from '../components/gallery/gallery.jsx'
import '../sass/base.scss'
// import { Head as NextHead } from 'next/head'

class Home extends Component {
  state = { navToggled: false }
  handleMenuClick = e => this.setState({ navToggled: !this.state.navToggled })

  render() {
    return (
      <React.Fragment>
        <HtmlHead pageTitle={'Welcome! 🤓 — Manny Ikomi'} />
        <MenuBar>
          <MenuButton click={this.handleMenuClick} />
        </MenuBar>
        {this.state.navToggled ? <MenuNav /> : null}
        <main>
          {/* Categorize <Gallery/> by #ui, #Identity Design, and #Other Works */}
          <Gallery id={'identity'} />
        </main>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default Home
