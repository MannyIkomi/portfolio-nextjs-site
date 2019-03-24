// https://nextjs.org/docs/
import React, { Component, Fragment } from 'react'
import HtmlHead from '../components/head'
import { WithNavigationToggle, MobileMenu } from '../components/navigation.jsx'
import Gallery from '../components/gallery/gallery.jsx'
import '../sass/base.scss'
// import { Head as NextHead } from 'next/head'

class Home extends Component {
  // refactor nav state into WithNavToggle Component?
  // state = { navToggled: false }
  // handleMenuClick = e => this.setState({ navToggled: !this.state.navToggled })

  render() {
    return (
      <Fragment>
        <HtmlHead pageTitle={'Welcome! 🤓 — Manny Ikomi'} />

        <header className={`dock-bottom`}>
          <WithNavigationToggle
            render={(navToggledState, handler) => {
              return <MobileMenu toggle={navToggledState} handler={handler} />
            }}
          />
        </header>
        <main>
          {/* Categorize <Gallery/> by #ui, #Identity Design, and #Other Works */}
          <h1>the work</h1>
          <Gallery id={'identity'} />
        </main>
        {/* <Footer /> */}
      </Fragment>
    )
  }
}

export default Home
