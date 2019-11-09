/** @jsx jsx */
import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import { LogoMaster } from './logo'
import SocialIcon, { socialData } from './social'
import { InlineLink } from './InlineLink'

//  Utility
import { getYear } from '../util/dates'
import { cms } from '../util/http'
import { mixin, colors, typography, measure } from '../styles'

const Footer = ({ styles, ...props }) => {
  const [socialPlatforms, setSocialPlatforms] = useState([])
  useEffect(() => {
    cms('/socials')
      .then(response => {
        const socialData = response.data
        console.table(socialData)
        setSocialPlatforms(socialData)
      })
      .catch(err => console.warn(err))
  }, [])

  const socialStyles = {
    display: 'block',
    ...mixin.size('100%', 'auto'),
    padding: '0.25rem',
    maxWidth: '2rem',
    minHeight: '1rem',
    minWidth: '1rem',

    ':hover': {
      svg: {
        fill: colors.orange
      }
    }
  }

  return (
    <footer // footer tag container
      css={{
        ...mixin.flex('column'),
        alignItems: 'center',
        justifyContent: 'space-between',

        position: 'relative',
        zIndex: '0',

        width: '100%',
        // height: 'calc(100vh - ${measure.menubarHeight})',
        minHeight: '100vh',
        padding: measure.menubarHeight,
        overflow: 'hidden',

        color: colors.muteGray,
        backgroundColor: colors.darkGray,

        section: {
          margin: '2rem 0'
        },

        ...mixin.tabletMedia({
          ...mixin.supportsGrid({
            // display: 'grid',
            gridTemplateAreas: `'logo social' 'code quote'`,
            gridTemplateColumns: '1fr 1fr',
            gridGap: '2rem',
            padding: '4rem',
            justifyContent: 'stretch'
          })
        }),
        ...styles
      }}
    >
      <div // quote
        css={{
          display: 'none',
          ...mixin.tabletMedia({
            ...mixin.supportsGrid({
              ...mixin.flex('column'),
              display: 'initial',
              gridArea: 'quote',

              justifyContent: 'center',
              marginBottom: '2rem',
              padding: '0',

              opacity: '0.5',
              zIndex: '0',
              color: colors.mediumGray
            })
          })
        }}
      >
        <blockquote
          css={{
            fontSize: '3rem',
            fontWeight: '100',

            minWidth: '10rem',
            maxWidth: '40rem',

            margin: 'auto',
            color: colors.mediumGray,
            textAlign: 'right',
            lineHeight: '1.25'
          }}
        >
          “Design is to design a design to produce a design.”
        </blockquote>
        <cite
          css={{
            display: 'block',
            margin: '1rem 0',

            fontFamily: typography.serif,
            fontWeight: '100',
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: 'inherit',
            textAlign: 'right'
          }}
        >
          — John Heskett
        </cite>
      </div>
      <LogoMaster
        color={'white'}
        styles={{
          width: '25%',
          // img: {
          //   width: '100%'
          // },
          margin: '2rem 0',
          '@media screen and (min-width: 500px)': {
            maxWidth: '10rem',

            '@media screen and (min-width: 700px)': {
              '@supports (display: grid)': {
                gridArea: 'logo',
                width: '8rem',
                margin: 'auto'
              }
            }
          }
        }}
      />
      <section // social + connect + email
        css={{
          // ${mixin.flex('column')};
          justifySelf: 'center',
          width: '75%',
          textAlign: 'center',

          '@media screen and (min-width: 500px)': {
            maxWidth: '320px'
          }

          // ${mixin.tabletMedia(`
          //   ${mixin.supportsGrid(`
          //       grid-area: social;
          //       align-self: center;
          //       margin: auto;
          //       width: auto;
          //   `)}
          // `)}
        }}
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
          {socialPlatforms.map(social => (
            <SocialIcon
              key={social.platform}
              color={'black'}
              styles={socialStyles}
              {...social}
            />
          ))}
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
          <InlineLink href={'https://www.aiga.org/'}>AIGA</InlineLink>
          <br />
          <InlineLink href={'/static/ikomi-resume.pdf'}>Resume</InlineLink>
          <br />
          <br />
          Oh, and{' '}
          <InlineLink href={'https://github.com/MannyIkomi/portfolio-site'}>
            I code too!
          </InlineLink>
          {` `}🦄
          <br />I built my portfolio site with
          {` `} <br />
          <InlineLink href={'https://reactjs.org/'}>React</InlineLink>,{` `}
          <InlineLink href={'https://strapi.io/'}>Strapi</InlineLink>
          {` `}and{` `}
          <InlineLink href={'https://nodejs.org/en/'}>Node.js</InlineLink>
          <br /> <br />
          Deployed with{` `}
          <InlineLink href={'https://www.heroku.com/'}>Heroku</InlineLink>
        </p>
      </section>
      <p // copyright line
        css={{
          color: colors.mediumGray,
          fontSize: '1rem',

          '@media screen and (min-width: 700px) ': {
            '@supports (display: grid)': {
              gridArea: 'quote',
              alignSelf: 'flex-end',
              textAlign: 'right'
            }
          }
        }}
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
