/** @jsx jsx */
import React, { Component, Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoType, LogoMaster } from '../logo'
import { MenuBar, NavContainer } from '../navigation/navigation'
import { InlineLink } from '../InlineLink'
import { MenuButton } from '../navigation/MenuButton'
import SocialIcon, { socialData, getSocialData } from '../social'

// Utility
import { cms } from '../../util/http'
import { getPages } from '../../util/navigation'
import { mixin, typography, measure, colors } from '../../styles'

export const SideMenu = props => {
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

  return (
    <section
      css={css`
        display: none;
        ${mixin.desktopMediaSupportsGrid(`
          position: relative;        
          // ${mixin.size('100%', '100vh')}
          min-height: 100%;
          ${mixin.flex('column')}
          align-items: center;
          // justify-content: center;
          box-shadow: 0.25rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25);
          background-color: ${colors.muteGray};
      `)}
      `}
    >
      <MenuBar
        styles={css`
          ${mixin.flex('column')};
          height: 100vh;
          position: fixed;
          padding: 3rem 0;
        `}
      >
        <LogoMaster
          styles={css`
            max-width: 6rem;
          `}
        />
        <NavContainer
          styles={css`
            margin: 4rem 0;
          `}
        >
          {getPages().map(page => (
            <InlineLink
              href={page.href}
              styles={{
                display: 'block',
                color: colors.darkGray,
                padding: '0.5rem 0',
                margin: '0.5rem 0',
                fontSize: '1.5rem'
              }}
            >
              {page.title}
            </InlineLink>
          ))}
        </NavContainer>
        <div
          css={css`
            ${mixin.flex('row')}
            align-items: center;
          `}
        >
          {socialPlatforms.map(social => (
            <SocialIcon
              key={social.platform}
              color={'black'}
              styles={css`
                display: block;
                ${mixin.size('100%', 'auto')};
                padding: 0.25rem;
                max-width: 2rem;
                min-height: 1rem;
                min-width: 1rem;
                :hover {
                  svg {
                    fill: ${colors.orange};
                  }
                }
              `}
              {...social}
            />
          ))}
        </div>
      </MenuBar>
    </section>
  )
}

export default SideMenu
