/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { colors } from '../../styles'

export const ResumeSection = ({ styles, children, ...props }) => {
  return (
    <article
      css={{
        borderTop: 'solid',
        margin: '2rem 0',
        h1: {
          fontWeight: '100',
          textAlign: 'right',
          color: colors.orange
        },
        ...styles
      }}
    >
      {children}
    </article>
  )
}

export default ResumeSection
