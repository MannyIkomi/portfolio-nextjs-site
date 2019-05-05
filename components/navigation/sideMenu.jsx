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
          ${mixin.size('100%', '100vh')}
          ${mixin.flex('column')}
          align-items: center;
          justify-content: space-between;
      `)}
      `}
    >
      <MenuBar
        styles={css`
          position: fixed;
          margin: 4rem auto;
          // ${mixin.size('100%', '100%')}
        `}
      >
        <Logo lockup={`master`} />
        <NavContainer>
          <NavLink
            pages={getPages()}
            styles={css`
              font-size: 1.5rem;
            `}
          />
        </NavContainer>
      </MenuBar>
    </section>
  )
}

export default SideMenu
