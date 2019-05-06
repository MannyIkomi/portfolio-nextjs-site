/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import Logo, { LogoTypeWide } from '../logo'

import { getPages } from '../../util/navigation'
import { colors, measure, typography, mixin } from '../../styles'

export const NavLink = props => {
  const { pages, styles } = props
  return pages.map((page, index) => (
    <a
      href={page.path}
      className="nav link"
      key={index}
      css={css`
        font-family: ${typography.serif};
        text-transform: lowercase;
        display: block;
        padding: 0.5rem 0;
        margin: 0.5rem 0;
        font-size: 2.5rem;
        &:hover {
          color: ${colors.orange};
        }

        ${styles}
      `}
    >
      {page.title}
    </a>
  ))
}

export const InlineLink = props => {
  const { href, text, styleOverrides } = props

  const baseStyle = css`
    display: inline-block;
    text-decoration: underline;
    &:hover {
      color: ${colors.orange};
    }
  }`

  return (
    <a href={href} css={[baseStyle, styleOverrides]}>
      {props.children || text}
    </a>
  )
}
InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  styleOverrides: PropTypes.any
}

export const NavContainer = props => {
  const { styles } = props
  return <nav css={styles}>{props.children}</nav>
}

export const MenuButton = props => {
  const handleClick = props.click
  return (
    <button type={`button`} onClick={handleClick}>
      Menu
    </button>
  )
}

export const MenuBar = props => {
  const { styles } = props
  return <div css={styles}>{props.children}</div>
}

export const WithSwitchToggle = props => {
  const [toggled, setToggled] = useState(false)

  function handleToggle(e) {
    setToggled(!toggled)
  }

  return <Fragment>{props.render(toggled, handleToggle)}</Fragment>
}
