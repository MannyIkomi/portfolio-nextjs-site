/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import { LogoMaster } from './logo'
import SocialIcon, { socialData } from './social'
import { InlineLink } from './navigation/navigation'

//  Utility
import { getYear } from '../util/dates'
import { mixin, colors, typography, measure } from '../styles'

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
        css`
          ${mixin.flex('column')}
          align-items: center;
          justify-content: space-between;

          position: relative;
          z-index: 0;

          width: 100%;
          // height: calc(100vh - ${measure.menubarHeight});
          min-height: 100vh;
          padding: ${measure.menubarHeight};
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
        `,
        styles
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
      <LogoMaster
        styles={css`
          width: 25%;
          img {
            width: 100%;
          }
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
        <InlineLink
          href={`mailto:design@mannyikomi.com`}
          styles={css`
            font-size: 1.5rem;
          `}
        >
          design@
          <wbr />
          mannyikomi.com
        </InlineLink>

        <br />
        <div
          css={css`
            ${mixin.flex('row')}
            align-items: center;
            justify-content: space-around;
          `}
        >
          {socialData.map(socialIcon => {
            return (
              <SocialIcon
                key={socialIcon.icon}
                link={socialIcon.link}
                icon={socialIcon.icon}
                alt={socialIcon.alt}
                styles={css`
                  display: block;
                  ${mixin.size('100%', 'auto')};
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
          <InlineLink href={'https://www.aiga.org/'} text={'AIGA'} />
          <br />
          <InlineLink href={'/static/ikomi-resume.pdf'} text={'Resume'} />
          <br />
          <br />
          Oh, and{' '}
          <InlineLink
            href={'https://github.com/MannyIkomi/portfolio-site'}
            text={'I code too!'}
          />
          {` `}🦄
          <br />I built my portfolio site with
          {` `} <br />
          <InlineLink href={'https://reactjs.org/'} text={'React'} />,{` `}
          <InlineLink href={'https://strapi.io/'} text={'Strapi'} />
          {` `}and{` `}
          <InlineLink href={'https://nodejs.org/en/'} text={'Node.js'} />
          <br /> <br />
          Deployed with{` `}
          <InlineLink href={'https://www.heroku.com/'} text={'Heroku'} />
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

Footer.propTypes = {
  styles: PropTypes.any
}

export default Footer
