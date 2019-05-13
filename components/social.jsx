/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

export const socialData = [
  {
    link: 'https://www.behance.net/ikomi',
    icon: '/static/social/be.svg',
    iconDark: '/static/social/be-dark.svg',
    alt: 'Behance Logo'
  },
  {
    link: 'https://www.instagram.com/designbymanny/',
    icon: '/static/social/ig.svg',
    iconDark: '/static/social/ig-dark.svg',
    alt: 'Instagram Logo'
  },
  {
    link: 'https://www.linkedin.com/in/ikomi',
    icon: '/static/social/in.svg',
    iconDark: '/static/social/in-dark.svg',
    alt: 'LinkedIn Logo'
  }
]

export const SocialIcon = props => {
  const { link, icon, alt, styles } = props
  const animate = css`
    transition: transform 1s ease-in-out;
    :hover {
      transform: rotateY(180deg);
    }
  `
  return (
    <a href={link} css={[animate, styles]}>
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
