import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Header = ({ children, ...props }) => (
  <header>
    header component
    {children}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
