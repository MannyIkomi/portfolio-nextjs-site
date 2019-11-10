/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { mixin, colors } from '../../styles'

export const MenuButton = ({ handleToggle, isToggled }) => {
  const distance = '0.66rem'

  const animateHamburger = {
    '.line:nth-of-type(1)': {
      transform: `translateY(${distance}) rotate(45deg)`
    },
    '.line:nth-of-type(2)': {
      opacity: '0'
    },
    '.line:nth-of-type(3)': {
      transform: `translateY(-${distance}) rotate(-45deg)`
    }
  }
  return (
    <button
      type={`button`}
      onClick={handleToggle}
      css={[
        {
          backgroundColor: 'initial',
          padding: 0,
          margin: 0,
          cursor: 'pointer',

          ...mixin.flex('column'),
          justifyContent: 'space-between',
          alignItems: 'center',

          '.line': {
            width: '2rem',
            height: '0.1875rem',
            backgroundColor: colors.darkGray,
            display: 'block',
            // margin: '0.5rem auto',
            transition: 'all 0.5s ease-in-out'
          }
        },
        isToggled && animateHamburger
      ]}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </button>
  )
}
MenuButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}
