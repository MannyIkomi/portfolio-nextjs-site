/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'

import { css, jsx } from '@emotion/core'

const showdown = require('showdown')

export const convertMarkdown = markdown => {
  const converter = new showdown.Converter()

  const html = converter.makeHtml(markdown)
  // const cleanHtml = dompurify.sanitize(dirtyHtml)

  return html
}

export const Markdown = props => {
  const { render, children, styles } = props
  const markdownString = children || render
  console.warn('The Markdown component uses dangerouslySetInnerHtml')
  return (
    <div
      css={styles}
      dangerouslySetInnerHTML={{ __html: convertMarkdown(markdownString) }}
    />
  )
}
Markdown.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.any
}

export default Markdown
