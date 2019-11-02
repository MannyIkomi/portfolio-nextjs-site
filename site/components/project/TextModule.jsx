/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import Markdown from '../markdown'
import {
  colors,
  moduleContainer,
  typography,
  linkStylingBase
} from '../../styles'
import { moduleProps } from '../../util/props'

export const TextModule = props => {
  const { text } = props.module
  return (
    <figure
      css={[
        moduleContainer,
        {
          maxWidth: '60ch',
          color: colors.darkGray,
          backgroundColor: colors.muteGray,
          padding: '2rem',
          'h1, h2': {
            color: colors.darkGray,
            fontWeight: 300
          },
          'p, ul, a': {
            fontWeight: 200
          },
          h1: { textAlign: 'right', marginBottom: '0.5rem' },
          h2: { margin: '0.5rem 0 0.25rem' },
          p: { lineHeight: 1.2 },
          ul: {
            listStylePosition: 'outside',
            fontSize: '1rem',
            paddingLeft: '1rem'
          },
          a: [typography.animateTypeSlug, linkStylingBase]
        }
      ]}
    >
      <Markdown>{text}</Markdown>
    </figure>
  )
}
TextModule.propTypes = moduleProps
