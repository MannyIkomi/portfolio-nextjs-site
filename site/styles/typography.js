import { css } from '@emotion/core'
import { colors, mixin } from '../styles/'

export const serif = 'baskerville-urw, Georgia, serif'
export const sans = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const sizeTransition = {
  transitionProperty: 'font-size',
  transitionTimingFunction: 'ease',
  transitionDuration: '0.5s',
  transitionDelay: '0.5s'
}

export const ulStyles = {
  listStyle: 'square',
  paddingLeft: '1.25rem'
}

export const linkStyles = {
  // position: 'relative',
  // '::before': {
  //   content: '😀',
  //   position: 'absolute'
  // },

  display: 'inline-block',
  textDecoration: 'underline',
  padding: '0.25rem 0',
  textDecorationColor: colors.orange,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

  '&:hover': {
    color: colors.orange
  }
}

export const typesetAnimation = {
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    transform: 'rotateX(180deg)'
  }
}

export const typography = {
  serif,
  sans,
  sizeTransition,
  linkStyles,
  typesetAnimation
}
export default typography
