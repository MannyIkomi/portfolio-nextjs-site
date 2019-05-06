/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoTypeWide } from '../logo'
import { MenuBar, MenuButton, NavContainer, NavLink } from './navigation'

import { getPages } from '../../util/navigation'
import { colors, measure, typography, mixin } from '../../styles'

export const DockedMenu = props => {
  const { menuToggled, handleMenuToggle } = props
  const dockedNavToggled = css`
    z-index: 999;
    position: fixed;
    bottom: -1px;

    ${mixin.flex('column')}
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-end;

    ${mixin.size('100vw', '100%')};
    height: 100vh;
    padding: calc(${measure.menubarHeight} + 1rem) 1rem;

    background: ${colors.muteGray};
    background: url('/static/nav-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;

    font-family: ${typography.serif};

    @media screen and (orientation: landscape) and (max-height: 450px) {
      background: ${colors.muteGray};
      ${mixin.flex('row')}
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: flex-end;
    }
  `
  return (
    <section
      css={css`
        z-index: 999;
        position: fixed;
        bottom: 0;
        left: 0;
        @media (hover: hover), (${measure.tabletMediaWidth}) {
          top: 0;
          bottom: initial;
        }
      `}
    >
      <MenuBar
        styles={css`
          z-index: 1000;
          position: relative;
          padding: 0.5rem;

          ${mixin.flex('row')}
          ${mixin.size(
            '100vw',
            measure.menubarHeight
          )}
        justify-content: space-between;

          background-color: ${colors.muteGray};
          box-shadow: 0rem -0.5rem 0.5rem 0px rgba(38, 38, 38, 0.2);
        `}
      >
        <LogoTypeWide />
        <MenuButton click={handleMenuToggle} />
      </MenuBar>
      {menuToggled ? (
        <NavContainer styles={dockedNavToggled}>
          <NavLink
            pages={getPages()}
            styles={css`
              @media screen and (orientation: landscape) and (max-height: 450px) {
                padding: 0.5rem;
                margin: 0.5rem;
              }
            `}
          />
        </NavContainer>
      ) : null}
    </section>
  )
}

export default DockedMenu
