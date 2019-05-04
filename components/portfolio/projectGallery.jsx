// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import { colors } from '../../styles'
import PropTypes from 'prop-types'

const Gallery = props => {
  const { id } = props
  return (
    <section
      css={css`
        background-color: ${colors.darkGray};
        width: 100%;
        padding: 2rem;
        @supports (display: grid) {
          @media screen and (min-width: 700px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 4rem;
            grid-auto-flow: row;
          }
        }
      `}
      id={id}
    >
      {props.children}
    </section>
  )
}

Gallery.propTypes = {
  id: PropTypes.number
}

export default Gallery
