import React, { Component } from 'react'
import { getYear } from '../util/dates'

// import './footer.scss'

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
        src="/static/logos/logo-master-white.svg"
        alt="Manny's Logo"
        className={`logo`}
      />
      <section className="social">
        <a href="mailto:design@mannyikomi.com" className={`link inline`}>
          design@
          <wbr />
          mannyikomi.com
        </a>
        <br />
        <span />
        <div className="icons">
          <a href="https://www.behance.net/ikomi" className={`link social`}>
            <img
              src="/static/social/be.svg"
              alt="Behance Logo"
              className={`social logo`}
            />
          </a>
          <a
            href="https://www.instagram.com/designbymanny/"
            className={`social link`}
          >
            <img
              src="/static/social/ig.svg"
              alt="Instagram Logo"
              className={`social logo`}
            />
          </a>
          <a href="https://www.linkedin.com/in/ikomi" className={`link social`}>
            <img
              src="/static/social/in.svg"
              alt="LinkedIn Logo"
              className={`social logo`}
            />
          </a>
        </div>
      </section>
      <section className="code">
        <p>
          Member{` `}
          <a href="https://www.aiga.org/" className={`inline link`}>
            AIGA
          </a>{' '}
          <br />
          <br />
          Oh, and{' '}
          <a href="https://github.com/MannyIkomi" className={`link inline`}>
            {' '}
            I code too!
          </a>
          {` `}🛠
          <br />
          My portfolio site is developed with{` `} <br />
          <a href="https://reactjs.org/" className={`link inline`}>
            React
          </a>
          ,{` `}
          <a href="https://graphql.org/" className={`link inline`}>
            GraphQL
          </a>
          {` `}and{` `}
          <a href="https://nodejs.org/en/" className={`link inline`}>
            Node.js
          </a>
          <br /> <br />
          Powered by{` `}
          <a href="https://www.behance.net/dev" className={`link inline`}>
            Behance
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
