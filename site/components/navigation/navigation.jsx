/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

import Logo, { LogoType } from '../logo'

import { getPages } from '../../util/navigation'
import { typography, measure, colors, linkStyles } from '../../styles'

export const NavLink = ({ pages, styles }) => {
  // const { pages, styles } = props
  return pages.map((page, index) => (
    <a
      href={page.path}
      className="nav link"
      key={page.title}
      css={{
        fontFamily: typography.serif,
        textTransform: 'lowercase',
        display: 'block',
        padding: '0.5rem 0',
        margin: '0.5rem 0',
        fontSize: '2.5rem',
        '&:hover': {
          color: colors.orange
        },

        ...styles
      }}
    >
      {page.title}
    </a>
  ))
}

export const NavContainer = ({ styles, children, ...props }) => (
  <nav css={styles}>{children}</nav>
)

export const MenuBar = ({ styles, children, ...props }) => (
  <div css={styles}>{props.children}</div>
)
