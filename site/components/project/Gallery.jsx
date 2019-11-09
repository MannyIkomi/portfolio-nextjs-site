// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import { colors, mixin } from '../../styles'
import PropTypes from 'prop-types'

const Gallery = ({ id, children }) => {
  return (
    <section
      css={{
        backgroundColor: colors.darkGray,
        width: '100%',
        padding: '2rem',
        ...mixin.tabletMedia({
          ...mixin.supportsGrid({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '4rem',
            gridAutoFlow: 'row'
          })
        })
      }}
      id={id}
    >
      {children}
    </section>
  )
}

Gallery.propTypes = {
  id: PropTypes.number
}

export default Gallery
