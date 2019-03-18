import React, { Component } from 'react'

class navItem extends Component {
  state = {}
  render() {
    const { path, title } = this.props.navData
    return (
      <a href={path} className="nav-link">
        {title}
      </a>
    )
  }
}

export default navItem
