/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
export const ProjectPhoto = ({ src, alt }) => (
  <img
    css={css`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    `}
    src={src}
    alt={alt}
  />
)

ProjectPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}
