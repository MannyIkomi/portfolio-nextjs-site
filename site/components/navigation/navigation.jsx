/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

import Logo, { LogoType } from '../logo'

import { getPages } from '../../util/navigation'
import { typography, measure, colors, linkStylingBase } from '../../styles'

export const NavLink = props => {
  const { pages, styles } = props
  return pages.map((page, index) => (
    <a
      href={page.path}
      className="nav link"
      key={page.title}
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

export const NavContainer = props => {
  const { styles } = props
  return <nav css={styles}>{props.children}</nav>
}

export const MenuBar = props => {
  const { styles } = props
  return <div css={styles}>{props.children}</div>
}
