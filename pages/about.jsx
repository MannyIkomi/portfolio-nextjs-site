import React, { Component, Fragment } from 'react'
import HtmlHead from '../components/head'
import '../sass/base.scss'

class About extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <HtmlHead pageTitle={'About Manny Ikomi'} />
        <h1>Hi</h1>

        <img src="static/headshot.jpg" alt="" />
        <p>
          Design thinker, lifetime learner, and crazy in love guncle. I like
          making great things for good people. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corporis incidunt asperiores nisi
          voluptates. Consequatur atque dolorem non distinctio. Vero soluta
          possimus quaerat necessitatibus neque, pariatur voluptates ipsum ipsam
          natus sint?
        </p>
        <button className={`cta`}>say hello</button>
      </Fragment>
    )
  }
}

export default About
