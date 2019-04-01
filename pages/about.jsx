import React, { Component, Fragment } from 'react'

import HtmlHead from '../components/head'
import { MobileMenu, WithNavigationToggle } from '../components/navigation'

import '../sass/base.scss'

class About extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <header className={`dock-bottom`}>
          <WithNavigationToggle
            render={(navToggledState, handler) => {
              return <MobileMenu toggle={navToggledState} handler={handler} />
            }}
          />
        </header>
        <section className={`about`}>
          <HtmlHead pageTitle={'About Manny Ikomi'} />
          <header>
            <div className={`headshot motif-left`}>
              <img src="static/headshot.jpg" alt="Portrait photo of Manny" />
            </div>
            <figcaption>
              <h1>Design thinker, lifetime learner, crazy in love guncle</h1>
            </figcaption>
          </header>
          <p>
            I use creativity, context, and critical thinking skills to design
            purposeful solutions that solve visual problems. In short, I like
            designing great things for good people. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis incidunt asperiores nisi
            voluptates. Consequatur atque dolorem non distinctio. Vero soluta
            possimus quaerat necessitatibus neque, pariatur voluptates ipsum
            ipsam natus sint?
          </p>
          <button className={`cta layout`}>Say Hello</button>
        </section>
        <br />
        <br />
        <br />
      </Fragment>
    )
  }
}

const Motif = props => {
  const { side } = props
  return <div className={`motif-${side}`} />
}

export default About
