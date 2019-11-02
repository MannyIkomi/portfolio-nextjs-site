/** @jsx jsx */
import React, { Fragment } from 'react'

import { css } from '@emotion/core'
import { colors } from './index'

export const serif = 'baskerville-urw, Georgia, serif'
export const sans = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const sizeTransition = css`
  transition-property: font-size;
  transition-timing-function: ease;
  transition-duration: 0.5s;
  transition-delay: 0.5s;
`

export const linkStylingBase = css`
display: inline-block;
text-decoration: underline;
&:hover {
  color: ${colors.orange};
}
}`

export const typography = {
  serif,
  sans,
  sizeTransition,
  linkStylingBase,
  typesetAnimation: css`
    transition: transform 0.5s ease-in-out;
    :hover {
      transform: rotateX(180deg);
    }
  `
}
export default typography
