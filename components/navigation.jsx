import React, { Component } from 'react'
import '../sass/nav.scss'
import { getPages } from '../util/navigation'

const NavItem = props => {
  const { path, title } = props.navData
  return (
    <a href={path} className="nav link">
      {title}
    </a>
  )
}

const MobileNav = props => {
  const generateNavItems = props => {
    return props.map(p => <NavItem navData={p} />)
  }

  return <nav className="mobile-nav">{generateNavItems(pages)}</nav>
}

export { MobileNav }
