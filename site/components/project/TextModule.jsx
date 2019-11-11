/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import Markdown from '../markdown'
import { colors, moduleContainer, typography } from '../../styles'
import { moduleProps } from '../../util/props'

export const TextModule = ({ text }) => {
  return (
    <figure
      css={[
        moduleContainer,
        {
          maxWidth: '60ch',
          color: colors.darkGray,
          backgroundColor: colors.muteGray,
          padding: '2rem'
        }
      ]}
    >
      <Markdown
        styles={{
          'h1, h2': {
            color: colors.darkGray,
            fontWeight: 300
          }
        }}
      >
        {text}
      </Markdown>
    </figure>
  )
}
TextModule.propTypes = moduleProps
