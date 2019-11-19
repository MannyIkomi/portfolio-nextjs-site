/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import { typography } from '../../styles'

export const Expertise = ({ description, url }) => {
  return (
    <li css={{ whiteSpace: 'pre-wrap' }}>
      {url ? (
        <a
          href={url}
          css={{
            display: 'inline',
            ...typography.linkStyles,
            ...typography.typesetAnimation
          }}
        >
          {description}
        </a>
      ) : (
        description
      )}
    </li>
  )
}

export default Expertise
