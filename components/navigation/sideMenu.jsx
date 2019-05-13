/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoTypeWide } from '../logo'
import {
  MenuButton,
  MenuBar,
  NavContainer,
  NavLink
} from '../navigation/navigation'
import SocialIcon, { socialData } from '../social'

// Utility
import { getPages } from '../../util/navigation'
import { colors, measure, typography, mixin } from '../../styles'

export const SideMenu = props => {
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
          justify-content: space-between;
          box-shadow: 0.25rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25);
          background-color: ${colors.muteGray};
      `)}
      `}
    >
      <MenuBar
        styles={css`
          ${mixin.flex('column')};
          justify-content: space-around;
          height: 100%;
          position: fixed;
          margin: 2rem auto;
        `}
      >
        <Logo
          // lockup={`master`}
          styles={css`
            max-width: 5rem;
          `}
        />
        <NavContainer>
          <NavLink
            pages={getPages()}
            styles={css`
              font-size: 1.5rem;
            `}
          />
        </NavContainer>
        {socialData.map(socialIcon => {
          return (
            <SocialIcon
              key={socialIcon.iconDark}
              link={socialIcon.link}
              icon={socialIcon.iconDark}
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
      </MenuBar>
    </section>
  )
}

export default SideMenu
