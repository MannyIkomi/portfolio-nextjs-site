/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

export const socialData = [
  {
    link: 'https://www.behance.net/ikomi',
    icon: '/static/social/be.svg',
    alt: 'Behance Logo'
  },
  {
    link: 'https://www.instagram.com/designbymanny/',
    icon: '/static/social/ig.svg',
    alt: 'Instagram Logo'
  },
  {
    link: 'https://www.linkedin.com/in/ikomi',
    icon: '/static/social/in.svg',
    alt: 'LinkedIn Logo'
  }
]

export const SocialIcon = props => {
  const { link, icon, alt, styles } = props
  return (
    <a href={link} css={styles}>
      <img src={icon} alt={alt} />
    </a>
  )
}
SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.any
}

export default SocialIcon
