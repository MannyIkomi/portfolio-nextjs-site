/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoType } from '../logo'
import { InlineLink } from '../InlineLink'
import { MenuBar, NavContainer } from './navigation'
import { MenuButton } from './MenuButton'
import { useToggleSwitch } from '../../hooks/useToggleSwitch'

import { getPages } from '../../util/navigation'
import { mixin, measure, colors, typography } from '../../styles'

export const DockedMenu = ({
  menuToggled,
  handleMenuToggle,
  // persistOnDesktop,
  ...props
}) => {
  const animateToggle = {
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'transform, opacity',
    transformOrigin: 'right center',
    transform: 'rotateY(180deg)'
  }

  const showDockedNav = [
    {
      zIndex: '999',
      position: 'fixed',
      bottom: '0',
      ...mixin.flex('column'),
      flexWrap: 'nowrap',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',

      ...animateToggle
    },
    menuToggled
      ? 'transform: rotateY(0); opacity: 1; pointer-events: auto;'
      : 'opacity: 0; pointer-events: none;',

    {
      ...mixin.size('100vw', '100%'),
      height: '100vh',
      // padding: calc(${measure.menubarHeight} + 1rem)
      padding: `${measure.menubarHeight} 1rem`,
      // ? https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding ?
      background: colors.muteGray,
      background: `'url('/static/nav-bg.svg')'`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
      fontFamily: typography.serif,

      [`@media (${measure.tabletMediaWidth})`]: {
        bottom: 'initial',
        top: '0',
        right: '0',

        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        width: '66%',

        background: colors.muteGray,
        background: `url('/static/nav-bg-top-right.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right'
      },

      [`@media screen and (orientation: landscape) and (max-height: 450px) `]: {
        background: colors.muteGray,
        width: '100%',
        ...mixin.flex('row'),
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }
    }
  ]

  return (
    <section
      css={[
        {
          zIndex: '999',
          position: 'fixed',
          top: '0',
          // bottom: '0',
          left: '0',
          [`(${measure.tabletMediaWidth})`]: {
            [`@media (${measure.tabletMediaWidth})`]: {
              top: '0',
              bottom: 'initial'
            }
          }
        }
        // !persistOnDesktop && {
        //   [`@media (${measure.desktopMediaWidth}) `]: {
        //     display: 'none'
        //     // ${persistOnDesktop ? null: ''display',
        //   }
        // }
      ]}
    >
      <MenuBar
        styles={[
          {
            zIndex: '1000',
            position: 'relative',
            padding: '0.5rem',

            ...mixin.flex('row'),
            ...mixin.size('100vw', measure.menubarHeight),
            justifyContent: 'space-between',

            backgroundColor: colors.muteGray,
            boxShadow: '0rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25)'
          }
          // {
          //   [`@media (${measure.tabletMediaWidth})`]: {
          //     display: persistOnDesktop ? 'flex' : 'none'
          //     // ${persistOnDesktop ? null: ''display',
          //   }
          // }
        ]}
      >
        <LogoType
          styles={{
            height: `calc(${measure.menubarHeight} - 0.5rem)`,
            width: 'auto'

            // `calc(${measure.menubarHeight} - 0.5rem)`
          }}
        />
        <MenuButton handleToggle={handleMenuToggle} isToggled={menuToggled} />
      </MenuBar>
      <NavContainer styles={showDockedNav}>
        {getPages().map(page => (
          <InlineLink
            key={page.title}
            href={page.href}
            styles={{
              display: 'block',
              color: colors.darkGray,
              fontFamily: typography.sans,
              padding: '0.5rem 0',
              margin: '0.5rem 0',
              fontSize: '1.5rem'
            }}
          >
            {page.title}
          </InlineLink>
        ))}
      </NavContainer>
    </section>
  )
}

DockedMenu.propTypes = {
  persistOnDesktop: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  menuToggled: PropTypes.bool.isRequired
}

export default DockedMenu
