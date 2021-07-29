import { Link } from "gatsby"
import React from "react"

export const Header = props => {
  const { children, ...rest } = props
  return (
    <header>
      header component
      {children}
    </header>
  )
}

export default Header
