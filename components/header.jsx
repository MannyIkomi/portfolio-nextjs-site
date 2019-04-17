import React, { Component } from 'react'
// React can convert to wrapped component and renders as inline-svg element
import { ReactComponent as LogoType } from '../assets/logo-type-long.svg'
import '../css/header-footer.css'

const DockedHeader = props => {
  const toggleNav = props.onClickMenu
  // onClickMenu prop is passed from the App.jsx toggleMenu(fn) to change navigation state
  return (
    <header className="dock-header">
      <LogoType className="logo" onClick={toggleNav} />
      <button className="menu-button" onClick={toggleNav}>
        Menu Button
      </button>
    </header>
  )
}

export default DockedHeader
