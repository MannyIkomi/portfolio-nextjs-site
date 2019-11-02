/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import Logo, { LogoTypeWide } from '../logo'

import { getPages } from '../../util/navigation'
import { typography, measure, colors, linkStylingBase } from '../../styles'

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
  const { href, text, styles } = props
  // Animate each character in a string for more authentic typesetting effect
  const string = props.children || text

  return (
    <a
      href={href}
      css={[typography.linkStylingBase, typography.typesetAnimation, styles]}
    >
      {string}
    </a>
  )
}
InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  styleOverrides: PropTypes.any
}

export const NavContainer = props => {
  const { styles } = props
  return <nav css={styles}>{props.children}</nav>
}

export const MenuBar = props => {
  const { styles } = props
  return <div css={styles}>{props.children}</div>
}
