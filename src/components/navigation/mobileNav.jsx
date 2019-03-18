import React, { Component } from 'react'
import NavItem from './navItem.jsx'
import '../../css/nav.css'

class MobileNav extends Component {
  generateNavItem = props => {
    return props.map(p => <NavItem navData={p} />)
  }
  render() {
    const navProps = this.props.nav
    return <nav className="mobile-nav">{this.generateNavItem(navProps)}</nav>
  }
}

export default MobileNav
