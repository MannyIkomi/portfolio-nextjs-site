/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import { LogoMasterWhite } from './logo'

//  Utility
import { getYear } from '../util/dates'
import { mixin, colors, typography } from '../styles'

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
    <a href={link} css={styles}>
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

const Footer = props => {
  const { styles } = props
  const inlineLinkStyles = css`
      text-decoration: underline;
      &:hover {
        color: ${colors.orange};
      }
    }`

  return (
    <footer // footer tag container
      css={[
        styles,
        css`
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

          ${mixin.tabletMedia(`
          ${mixin.supportsGrid(`
            display: grid;
            grid-template-areas:
            'logo social'
            'code quote';
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
            padding: 4rem;
            justify-content: stretch;
          `)}
        `)}
        `
      ]}
    >
      <div // quote
        css={css`
          display: none;
          ${mixin.tabletMedia(`
            ${mixin.supportsGrid(`
            ${mixin.flex('column')};

            display: initial;
            grid-area: quote;
    
            justify-content: center;
            margin-bottom: 2rem;
            padding: 0;
    
              opacity: 0.5;
              z-index: 0;
              color: ${colors.mediumGray};
            `)}
          `)}
        `}
      >
        <blockquote
          css={css`
            font-size: 3rem;
            font-weight: 100;

            min-width: 10rem;
            max-width: 40rem;

            margin: auto;
            color: ${colors.mediumGray};
            text-align: right;
            line-height: 1.25;
          `}
        >
          “Design is to design a design to produce a design.”
        </blockquote>
        <cite
          css={css`
            display: block;
            margin: 1rem 0;

            font-family: ${typography.serif};
            font-weight: 100;
            font-size: 1.5rem;
            font-style: italic;
            color: inherit;
            text-align: right;
          `}
        >
          — John Heskett
        </cite>
      </div>
      <LogoMasterWhite
        styles={css`
          width: 25%;
          margin: 2rem 0;
          @media screen and (min-width: 500px) {
            max-width: 10rem;

            @media screen and (min-width: 700px) {
              @supports (display: grid) {
                grid-area: logo;
                width: 8rem;
                margin: auto;
              }
            }
          }
        `}
      />
      <section // social + connect + email
        css={css`
          // z-index: 1;
          ${mixin.flex('column')};
          justify-self: center;
          width: 75%;
          text-align: center;

          @media screen and (min-width: 500px) {
            max-width: 320px;
          }

          ${mixin.tabletMedia(`
            ${mixin.supportsGrid(`
                grid-area: social;
                align-self: center;
                margin: auto;
                width: auto;
            `)}
          `)}
        `}
      >
        <a
          href="mailto:design@mannyikomi.com"
          css={css`
            ${inlineLinkStyles}
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
            ${mixin.flex('row')}
            align-items: center;
            justify-content: space-around;
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
                  display: block;
                  ${mixin.size('100%', 'auto')};
                  margin: 1rem;
                  max-width: 3rem;
                  min-height: 2rem;
                `}
              />
            )
          })}
        </div>
      </section>
      <section // code section
        css={css`
          text-align: center;
          ${mixin.tabletMedia(`
            ${mixin.supportsGrid(`
              grid-area: code;
            `)}
          `)}
        `}
      >
        <p>
          Member{` `}
          <a href="https://www.aiga.org/" css={inlineLinkStyles}>
            AIGA
          </a>{' '}
          <br />
          <br />
          Oh, and{' '}
          <a href="https://github.com/MannyIkomi" css={inlineLinkStyles}>
            {' '}
            I code too!
          </a>
          {` `}🦄
          <br />I built my portfolio site with
          {` `} <br />
          <a href="https://reactjs.org/" css={inlineLinkStyles}>
            React
          </a>
          ,{` `}
          <a href="https://graphql.org/" css={inlineLinkStyles}>
            GraphQL
          </a>
          {` `}and{` `}
          <a href="https://nodejs.org/en/" css={inlineLinkStyles}>
            Node.js
          </a>
          <br /> <br />
          Powered by{` `}
          <a href="https://www.behance.net/dev" css={inlineLinkStyles}>
            Behance
          </a>
        </p>
      </section>
      <p // copyright line
        css={css`
          color: ${colors.mediumGray};
          font-size: 1rem;

          @media screen and (min-width: 700px) {
            @supports (display: grid) {
              grid-area: quote;
              align-self: flex-end;
              text-align: right;
            }
          }
        `}
      >
        Copyright &copy; {getYear('numeric')} Manny Ikomi
      </p>
    </footer>
  )
}

export default Footer
