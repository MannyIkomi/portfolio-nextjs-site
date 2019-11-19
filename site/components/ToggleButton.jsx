/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

export const ToggleButton = ({
  toggled,
  handleClick,
  children,
  styles,
  ...props
}) => {
  return (
    <button
      css={[
        {
          display: 'block'
        },
        styles
      ]}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  )
}

export default ToggleButton
