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

const MenuNav = props => {
  return (
    <nav className="nav mobile">
      <NavLink pages={getPages()} />
    </nav>
  )
}

const Logo = props => {
  const { lockup } = props

  return (
    <a href={`/`}>
      <img
        className={`logo`}
        src={`static/logos/logo-${lockup || `master`}.svg`} // type = ['master','type','wide' ]
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
  return <section className={`nav menubar shadow`}>{props.children}</section>
}

class WithNavigationToggle extends Component {
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

const MobileMenu = props => {
  const { toggle: navToggled, handler: handleMenuClick } = props
  return (
    <Fragment>
      {navToggled ? <MenuNav /> : null}
      <MenuBar>
        <Logo lockup={`type`} />
        <MenuButton click={handleMenuClick} />
      </MenuBar>
    </Fragment>
  )
}

export { MenuBar, MenuNav, MenuButton, Logo, WithNavigationToggle, MobileMenu }
