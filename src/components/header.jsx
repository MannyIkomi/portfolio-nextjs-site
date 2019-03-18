import React, { Component } from 'react'
// React can convert to wrapped component and renders as inline-svg element
import { ReactComponent as LogoType } from '../assets/logo-type.svg'
import '../css/header-footer.css'

class DockedHeader extends Component {
  state = {}
  render() {
    // onClickMenu prop is passed from the App.jsx toggleMenu(fn) to change navigation state
    const toggleNav = this.props.onClickMenu
    return (
      <header className="dock-header">
        <LogoType className="logo" onClick={toggleNav} />
        <button className="menu-button" onClick={toggleNav}>
          Menu Button
        </button>
      </header>
    )
  }
}

export default DockedHeader
