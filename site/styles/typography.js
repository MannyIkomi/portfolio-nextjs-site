import { css } from '@emotion/core'
import { colors } from './index'

export const serif = 'baskerville-urw, Georgia, serif'
export const sans = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const sizeTransition = {
  transitionProperty: 'font-size',
  transitionTimingFunction: 'ease',
  transitionDuration: '0.5s',
  transitionDelay: '0.5s'
}

export const linkStyles = {
  display: 'inline-block',
  textDecoration: 'underline',
  '&:hover': {
    color: colors.orange
  }
}

export const typesetAnimation = {
  transition: 'transform 0.5s ease-in-out',
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
