import React, { Component, Fragment } from 'react'
// import '../sass/nav.scss'
import { getPages } from '../util/navigation'
import { css } from '@emotion/core'
import { colors } from '../styles'

export const NavLink = props => {
  const { pages } = props
  return pages.map((page, index) => (
    <a href={page.path} className="nav link" key={index}>
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
  return <section className={`nav menubar shadow`}>{props.children}</section>
}

export class WithNavigationToggle extends Component {
  state = { navToggled: false }
  handleMenuClick = e => this.setState({ navToggled: !this.state.navToggled })
  render() {
    return (
      <Fragment>
        {this.props.render(this.state.navToggled, this.handleMenuClick)}
      </Fragment>
    )
  }
}

export const MobileMenu = props => {
  const { toggle: navToggled, handler: handleMenuClick } = props
  return (
    <Fragment>
      {navToggled ? <MenuNav type={`mobile`} /> : null}
      <MenuBar>
        <Logo lockup={`type-long`} />
        <MenuButton click={handleMenuClick} />
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
