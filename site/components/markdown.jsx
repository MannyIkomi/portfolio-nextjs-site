import React from 'react'

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

export default Markdown
