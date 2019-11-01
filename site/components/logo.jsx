/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { size, mixin } from '../styles'

export const Logo = props => {
  const { lockup, styles } = props

  return (
    <a
      href={`/`}
      css={css`
        display: block;
        ${styles || null}
      `}
    >
      <img
        css={css`
          object-fit: contain;
          height: 100%;
        `}
        src={`/static/logos/logo-${lockup || `master`}.svg`} // type = ['master','type','wide' ]
        alt={`Manny Ikomi's Logo`}
      />
    </a>
  )
}
Logo.propTypes = {
  lockup: PropTypes.oneOf(['master', 'type', 'type-wide', 'master-white']),
  styles: PropTypes.any
}

export const LogoTypeWide = props => (
  <Logo lockup={`type-wide`} styles={props.styles} />
)
export const LogoMasterWhite = props => (
  <Logo lockup={`master-white`} styles={props.styles} />
)

export default Logo
