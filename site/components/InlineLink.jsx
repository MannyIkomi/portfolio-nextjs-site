/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { typography } from '../styles'

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
  children: PropTypes.any.isRequired,
  text: PropTypes.string,
  styles: PropTypes.any
}
