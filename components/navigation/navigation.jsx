/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import Logo, { LogoTypeWide } from '../logo'

import { getPages } from '../../util/navigation'
import { colors, measure, typography, mixin } from '../../styles'

export const NavLink = props => {
  const { pages, styles } = props
  return pages.map((page, index) => (
    <a
      href={page.path}
      className="nav link"
      key={index}
      css={css`
        font-family: ${typography.serif};
        text-transform: lowercase;
        display: block;
        padding: 0.5rem 0;
        margin: 0.5rem 0;
        font-size: 2.5rem;
        &:hover {
          color: ${colors.orange};
        }

        ${styles}
      `}
    >
      {page.title}
    </a>
  ))
}

export const InlineLink = props => {
  const { href, text, styleOverrides } = props
  const baseStyle = css`
    display: inline-block;
    text-decoration: underline;
    &:hover {
      color: ${colors.orange};
    }
  }`

  return (
    <a href={href} css={[baseStyle, styleOverrides]}>
      {props.children || text}
    </a>
  )
}
InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  styleOverrides: PropTypes.any
}

export const NavContainer = props => {
  const { styles } = props
  return <nav css={styles}>{props.children}</nav>
}

export const MenuButton = props => {
  // https://codepen.io/MannyIkomi/pen/vwKJar
  const { handleToggle, isToggled } = props
  const coordinates = '0.66rem' //'0.125rem'

  const animateHamburger = css`
    .line:nth-of-type(1) {
      transform: translateY(${coordinates}) rotate(45deg);
    }
    .line:nth-of-type(2) {
      opacity: 0;
    }
    .line:nth-of-type(3) {
      transform: translateY(-${coordinates}) rotate(-45deg);
    }
  `

  return (
    <button
      type={`button`}
      onClick={handleToggle}
      css={css`
        background-color: initial;
        padding: 0;
        margin: 0;
        cursor: pointer;

        ${mixin.flex('column')}
        justify-content: space-between;
        align-items: center;

        .line {
          width: 2rem;
          height: 0.1875rem;
          background-color: ${colors.darkGray};
          display: block;
          // margin: 0.5rem auto;

          transition: all 0.5s ease-in-out;
        }

        ${isToggled && animateHamburger}
      `}
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

export const MenuBar = props => {
  const { styles } = props
  return <div css={styles}>{props.children}</div>
}

export const WithSwitchToggle = props => {
  const [toggled, setToggled] = useState(false)

  function handleToggle(e) {
    setToggled(!toggled)
  }

  return <Fragment>{props.render(toggled, handleToggle)}</Fragment>
}
