import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const Header = ({ siteTitle }) => <header>header component</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
