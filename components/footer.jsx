/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import { LogoMasterWhite } from './logo'

import { getYear } from '../util/dates'
import { mixin, colors, typography } from '../styles'

// import './footer.scss'

const socialMedia = [
  {
    link: 'https://www.behance.net/ikomi',
    icon: '/static/social/be.svg',
    alt: 'Behance Logo'
  },
  {
    link: 'https://www.instagram.com/designbymanny/',
    icon: '/static/social/ig.svg',
    alt: 'Instagram Logo'
  },
  {
    link: 'https://www.linkedin.com/in/ikomi',
    icon: '/static/social/in.svg',
    alt: 'LinkedIn Logo'
  }
]

const SocialIcon = props => {
  const { link, icon, alt, styles } = props
  return (
    <a href={link}>
      <img src={icon} alt={alt} />
    </a>
  )
}
SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.any
}

export const Footer = props => {
  const linkInlineStyles = css`
      text-decoration: underline;
      &:hover {
        color: ${colors.orange};
      }
    }
  `

  return (
    <footer
      css={css`
        ${mixin.flex('column')}
        align-items: center;
        justify-content: space-between;

        position: relative;
        z-index: 0;

        width: 100%;
        min-height: 100vh;
        padding: 1rem;
        overflow: hidden;

        color: ${colors.muteGray};
        background-color: ${colors.darkGray};

        section {
          margin: 2rem 0;
        }
      `}
    >
      <div
        css={css`
          display: none;
          @supports (display: grid) {
            @media screen and (min-width: 700px) {
              ${mixin.flex('column')};

              display: initial;
              grid-area: quote;

              justify-content: center;
              margin-bottom: 2rem;
              padding: 0;

              opacity: 0.5;
              z-index: 0;
              color: ${colors.mediumGray};

              blockquote {
                font-size: 3rem;
                font-weight: 100;

                min-width: 10rem;
                max-width: 40rem;

                margin: auto;
                color: ${colors.mediumGray};
                text-align: right;
                line-height: 1.25;
              }
              cite {
                display: block;
                margin: 1rem 0;

                font-family: ${typography.serif};
                font-weight: 100;
                font-size: 1.5rem;
                font-style: italic;
                color: inherit;
                text-align: right;
              }
            }
          }
        `}
      >
        <blockquote>
          “Design is to design a design to produce a design.”
        </blockquote>
        <cite>— John Heskett</cite>
      </div>
      <LogoMasterWhite
        styles={css`
          width: 25%;
          margin: 2rem 0;
          @media screen and (min-width: 500px) {
            max-width: 10rem;
          }
        `}
      />
      <section
        className="social"
        css={css`
          // z-index: 1;
          ${mixin.flex('column')};
          width: 75%;
          text-align: center;

          @media screen and (min-width: 500px) {
            max-width: 320px;
          }
        `}
      >
        <a
          href="mailto:design@mannyikomi.com"
          className={`link inline`}
          css={css`
            ${linkInlineStyles}
            font-size: 1.5rem;
          `}
        >
          design@
          <wbr />
          mannyikomi.com
        </a>
        <br />
        <div
          css={css`
            align-items: center;
            justify-content: space-around;
            ${mixin.flex('row')};
          `}
        >
          {socialMedia.map(socialIcon => {
            return (
              <SocialIcon
                key={socialIcon.icon}
                link={socialIcon.link}
                icon={socialIcon.icon}
                alt={socialIcon.alt}
                styles={css`
                  ${mixin.size('100%', 'auto')};
                  // margin: auto;
                  // margin: 1rem;
                  display: block;
                  max-width: 3rem;
                  min-height: 2rem;
                `}
              />
            )
          })}
        </div>
      </section>
      <section
        css={css`
          text-align: center;
        `}
      >
        <p>
          Member{` `}
          <a href="https://www.aiga.org/" css={linkInlineStyles}>
            AIGA
          </a>{' '}
          <br />
          <br />
          Oh, and{' '}
          <a href="https://github.com/MannyIkomi" css={linkInlineStyles}>
            {' '}
            I code too!
          </a>
          {` `}🛠
          <br />
          My portfolio site is developed with{` `} <br />
          <a href="https://reactjs.org/" css={linkInlineStyles}>
            React
          </a>
          ,{` `}
          <a href="https://graphql.org/" css={linkInlineStyles}>
            GraphQL
          </a>
          {` `}and{` `}
          <a href="https://nodejs.org/en/" css={linkInlineStyles}>
            Node.js
          </a>
          <br /> <br />
          Powered by{` `}
          <a href="https://www.behance.net/dev" css={linkInlineStyles}>
            Behance
          </a>
        </p>
      </section>
      <p
        className={`copyright`}
        css={css`
          color: ${colors.mediumGray};
          font-size: 1rem;
        `}
      >
        Copyright &copy; {getYear('numeric')} Manny Ikomi
      </p>
    </footer>
  )
}

export default Footer
