/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoType, LogoMaster } from '../logo'
import { MenuBar, NavContainer, InlineLink } from '../navigation/navigation'
import { MenuButton } from '../navigation/MenuButton'
import SocialIcon, { socialData } from '../social'

// Utility
import { getPages } from '../../util/navigation'
import { mixin, typography, measure, colors } from '../../styles'

export const SideMenu = props => {
  return (
    <section
      css={css`
        display: none;
        ${mixin.desktopMediaSupportsGrid(`
          position: relative;        
          // ${mixin.size('100%', '100vh')}
          min-height: 100%;
          ${mixin.flex('column')}
          align-items: center;
          // justify-content: center;
          box-shadow: 0.25rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25);
          background-color: ${colors.muteGray};
      `)}
      `}
    >
      <MenuBar
        styles={css`
          ${mixin.flex('column')};
          height: 100vh;
          position: fixed;
          padding: 3rem 0;
        `}
      >
        <LogoMaster
          // lockup={`master`}
          styles={css`
            max-width: 5rem;
          `}
        />
        <NavContainer
          styles={css`
            margin: 4rem 0;
          `}
        >
          {getPages().map(page => (
            <InlineLink
              href={page.href}
              styles={{
                display: 'block',
                color: colors.darkGray,
                padding: '0.5rem 0',
                margin: '0.5rem 0',
                fontSize: '1.5rem'
              }}
            >
              {page.title}
            </InlineLink>
          ))}
          {/* <NavLink
            pages={getPages()}
            styles={css`
              font-size: 1.5rem;
            `}
          /> */}
        </NavContainer>
        <div
          css={css`
            ${mixin.flex('row')}
            align-items: center;
          `}
        >
          {socialData.map(socialIcon => {
            return (
              <SocialIcon
                key={socialIcon.iconDark}
                link={socialIcon.link}
                icon={socialIcon.iconDark}
                alt={socialIcon.alt}
                styles={css`
                  display: block;
                  ${mixin.size('100%', 'auto')};
                  padding: 0.25rem;
                  max-width: 2rem;
                  min-height: 1rem;
                `}
              />
            )
          })}
        </div>
      </MenuBar>
    </section>
  )
}

export default SideMenu
