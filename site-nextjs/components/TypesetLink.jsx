/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { typography } from '../styles'

export const TypesetLink = ({ href, text, styles, children, ...props }) => {
  // const { href, text, styles } = props

  // ? Animate each character in a string for more authentic typesetting effect?
  const string = children || text
  return (
    <a
      href={href}
      css={[typography.linkStyles, typography.typesetAnimation, styles]}
    >
      {string}
    </a>
  )
}
TypesetLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  text: PropTypes.string
}
