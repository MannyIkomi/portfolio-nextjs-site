/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import { getPages } from '../../util/navigation'
import { css, jsx } from '@emotion/core'
import { colors, measure, typography, mixin } from '../../styles'

export const NavLink = props => {
  const { pages } = props
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
        @media screen and (orientation: landscape) and (max-height: 450px) {
          padding: 0.5rem;
          margin: 0.5rem;
        }
      `}
    >
      {page.title}
    </a>
  ))
}

export const MenuNav = props => {
  const { type } = props

  return (
    <nav className={`nav ${type}`}>
      <NavLink pages={getPages()} />
    </nav>
  )
}

export const Logo = props => {
  const { lockup } = props

  return (
    <a href={`/`}>
      <img
        css={css`
          object-fit: contain;
          width: auto;
          height: 100%;
        `}
        src={`static/logos/logo-${lockup || `master`}.svg`} // type = ['master','type','wide' ]
        alt={`Manny Ikomi's Logo`}
      />
    </a>
  )
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
  return (
    <section
      className={`nav menubar shadow`}
      css={css`
        z-index: 1000;
        position: relative;
        padding: 0.5rem;

        ${mixin.flex('row')}
        ${mixin.size('100%')}
        height: ${measure.menubarHeight};
        justify-content: space-between;

        background-color: ${colors.muteGray};
        box-shadow: 0rem -0.5rem 0.5rem 0px rgba(38, 38, 38, 0.2);
      `}
    >
      {props.children}
    </section>
  )
}

export const WithSwitchToggle = props => {
  const [toggled, setToggled] = useState(false)

  function handleToggle(e) {
    setToggled(!toggled)
  }

  return <Fragment>{props.render(toggled, handleToggle)}</Fragment>
}

export const MobileMenu = props => {
  const { menuToggled, handleMenuToggle } = props
  return (
    <Fragment>
      {menuToggled ? <MenuNav type={`mobile`} /> : null}
      <MenuBar>
        <Logo lockup={`type-long`} />
        <MenuButton click={handleMenuToggle} />
      </MenuBar>
    </Fragment>
  )
}

export const SideMenu = props => {
  const { toggle: navToggled, handler: handleMenuClick } = props

  return (
    <Fragment>
      <MenuBar>
        <Logo lockup={`master`} />
        <MenuNav type={`sidebar`} />
      </MenuBar>
    </Fragment>
  )
}
