/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'

import { css, jsx } from '@emotion/core'
import { typography } from '../styles'

const showdown = require('showdown')

export const convertMarkdown = (markdown = '', preprocessor) => {
  const converter = new showdown.Converter()

  const html = converter.makeHtml(
    preprocessor ? preprocessor(markdown) : markdown
  )
  // const cleanHtml = dompurify.sanitize(dirtyHtml)

  return html
}

export const Markdown = ({ children, styles, preprocessor, ...props }) => {
  // const { render, children, styles } = props
  const markdownString = children
  console.warn('The Markdown component uses dangerouslySetInnerHtml')
  return (
    <div
      css={{
        'h1,h2,h3,h4,h5,h6': {
          ...typography.serif
        },
        'p, ul, a': {
          fontFamily: typography.sans,
          fontSize: '1.25rem'
        },
        ul: {
          paddingLeft: '1.5rem',
          lineHeight: 1.4
        },
        a: {
          ...typography.linkStyles,
          ...typography.typesetAnimation
        },
        ...styles
      }}
      dangerouslySetInnerHTML={{
        __html: convertMarkdown(markdownString, preprocessor)
      }}
    />
  )
}
Markdown.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.any,
  preprocessor: PropTypes.func
}

export default Markdown
