/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import Logo, { LogoTypeWide } from '../logo'

import { getPages } from '../../util/navigation'
import { colors, measure, typography, mixin } from '../../styles'

export const NavLink = props => {
  const { pages, styles } = props
  return pages.map((page, index) => (
    <a
      href={page.path}
      className="nav link"
      key={index}
      css={css`
        font-family: ${typography.serif};
        text-transform: lowercase;
        display: block;
        padding: 0.5rem 0;
        margin: 0.5rem 0;
        font-size: 2.5rem;
        &:hover {
          color: ${colors.orange};
        }

        ${styles}
      `}
    >
      {page.title}
    </a>
  ))
}

export const MenuNav = props => {
  const { styles } = props
  return <nav css={styles}>{props.children}</nav>
}

export const MenuButton = props => {
  const handleClick = props.click
  return (
    <button type={`button`} onClick={handleClick}>
      Menu
    </button>
  )
}

export const MenuBar = props => {
  const { styles } = props
  return <div css={styles}>{props.children}</div>
}

export const WithSwitchToggle = props => {
  const [toggled, setToggled] = useState(false)

  function handleToggle(e) {
    setToggled(!toggled)
  }

  return <Fragment>{props.render(toggled, handleToggle)}</Fragment>
}

export const DockedMenu = props => {
  const { menuToggled, handleMenuToggle } = props
  const dockedMenuStyle = css`
    z-index: 999;
    position: relative;
    bottom: -1px;

    ${mixin.flex('column')}
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-end;

    ${mixin.size('100vw', '100%')};
    height: 100vh;
    height: calc(100vh - ${measure.menubarHeight} + 1px);
    padding: 1rem;

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
      `}
    >
      {menuToggled ? (
        <MenuNav styles={dockedMenuStyle}>
          <NavLink
            pages={getPages()}
            styles={css`
              @media screen and (orientation: landscape) and (max-height: 450px) {
                padding: 0.5rem;
                margin: 0.5rem;
              }
            `}
          />
        </MenuNav>
      ) : null}
      <MenuBar
        styles={css`
        z-index: 1000;
        position: relative;
        padding: 0.5rem;

        ${mixin.flex('row')}
        ${mixin.size('100vw')}
        height: ${measure.menubarHeight};
        justify-content: space-between;

        background-color: ${colors.muteGray};
        box-shadow: 0rem -0.5rem 0.5rem 0px rgba(38, 38, 38, 0.2);
      `}
      >
        <LogoTypeWide />
        <MenuButton click={handleMenuToggle} />
      </MenuBar>
    </section>
  )
}

export const SideMenu = props => {
  return (
    <section
      css={css`
        display: none;
        ${mixin.desktopMediaGridSupport(`
          position: relative; 
          ${mixin.size('100%', '100vh')}
          ${mixin.flex('column')};
          align-items: center;
          justify-content: space-between;
        `)}
      `}
    >
      <MenuBar
        styles={css`
          position: fixed;
        `}
      >
        <Logo lockup={`master`} />
        <MenuNav>
          <NavLink
            pages={getPages()}
            styles={css`
              font-size: 1.5rem;
            `}
          />
        </MenuNav>
      </MenuBar>
    </section>
  )
}
