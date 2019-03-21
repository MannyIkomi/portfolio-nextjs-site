import React, { Component, Fragment } from 'react'
import '../sass/nav.scss'
import { getPages } from '../util/navigation'

const NavLink = props => {
  const { pages } = props
  return pages.map((page, index) => (
    <a href={page.path} className="nav link" key={index}>
      {page.title}
    </a>
  ))
}

// const MobileNav = props => {
//   const generateNavItems = props => {
//     return props.map(p => <NavItem navData={p} />)
//   }

//   return <nav>{generateNavItems(pages)}</nav>
// }

// logo component
// menu button component
// menu nav

const MenuNav = props => {
  return (
    <nav className="nav mobile">
      <NavLink pages={getPages()} />
    </nav>
  )
}

const Logo = props => {
  const { type } = props

  return (
    <a href={`/`}>
      <img
        className={`logo`}
        src={`static/logos/logo-${type || `master`}.svg`}
        alt={`Manny Ikomi's Logo`}
      />
    </a>
  )
}

const MenuButton = props => {
  const handleClick = props.click

  return (
    <button type={`button`} onClick={handleClick}>
      Menu
    </button>
  )
}
const MenuBar = props => {
  return (
    <header className={`nav dock-bottom shadow`}>
      <Logo type={`type`} />
      {props.children || <MenuButton />}
    </header>
  )
}

export { MenuBar, MenuNav, MenuButton }
