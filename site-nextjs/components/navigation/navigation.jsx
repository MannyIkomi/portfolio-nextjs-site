/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

import Logo, { LogoType } from '../logo'

import { typography, colors } from '../../styles'

export const NavContainer = ({ styles, children, ...props }) => (
  <nav css={styles}>{children}</nav>
)

export const MenuBar = ({ styles, children, ...props }) => (
  <div css={styles}>{children}</div>
)
