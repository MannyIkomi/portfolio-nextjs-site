import React, { Component } from 'react'
import { getYear } from '../util/dates'

import '../sass/footer.scss'

export const Footer = props => {
  return (
    <footer className="footer">
      <div className="quote">
        <blockquote>
          “Design is to design a design to produce a design.”
        </blockquote>
        <cite>— John Heskett</cite>
      </div>
      <img
        src="static/logos/logo-master-white.svg"
        alt="Manny's Logo"
        className={`logo`}
      />
      <a href="mailto:design@mannyikomi.com" className={`link inline`}>
        design@
        <wbr />
        mannyikomi.com
      </a>
      <span>
        Member{` `}
        <a href="https://www.aiga.org/" className={`inline link`}>
          AIGA
        </a>
      </span>
      <section className="social">
        <a href="https://www.behance.net/ikomi" className={`link social`}>
          <img
            src="static/social/be.svg"
            alt="Behance Logo"
            className={`social logo`}
          />
        </a>
        <a
          href="https://www.instagram.com/designbymanny/"
          className={`social link`}
        >
          <img
            src="static/social/ig.svg"
            alt="Instagram Logo"
            className={`social logo`}
          />
        </a>
        <a href="https://www.linkedin.com/in/ikomi" className={`link social`}>
          <img
            src="static/social/in.svg"
            alt="LinkedIn Logo"
            className={`social logo`}
          />
        </a>
      </section>
      <section className="code">
        <p>
          Oh, and{' '}
          <a href="https://github.com/MannyIkomi" className={`link inline`}>
            {' '}
            I code too!
          </a>
          <br />
          My portfolio site is made with{` `} <br />
          <a href="https://reactjs.org/" className={`link inline`}>
            React
          </a>
          ,{` `}
          <a href="https://expressjs.com/" className={`link inline`}>
            Express
          </a>
          {` `}and{` `}
          <a href="https://graphql.org/" className={`link inline`}>
            GraphQL
          </a>
          <br />
          Powered by the{` `}
          <a href="https://www.behance.net/dev" className={`link inline`}>
            Behance API
          </a>
        </p>
      </section>
      <p className={`copyright`}>
        Copyright &copy; {getYear('numeric')} Manny Ikomi
      </p>
    </footer>
  )
}

export default Footer
