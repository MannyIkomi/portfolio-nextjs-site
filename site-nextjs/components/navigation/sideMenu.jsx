/** @jsx jsx */
import React, { Component, Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import Logo, { LogoType, LogoMaster } from '../logo'
import { MenuBar, NavContainer } from '../navigation/navigation'
import { InlineLink } from '../InlineLink'
import { MenuButton } from '../navigation/MenuButton'
import SocialIcon, { socialData, getSocialData } from '../social'

// Utility
import { useSocialMedia } from '../../hooks/useSocialMedia'
import { cms } from '../../util/http'
import { getPages } from '../../util/navigation'
import { mixin, typography, measure, colors } from '../../styles'

export const SideMenu = props => {
  const socialMedia = useSocialMedia()

  return (
    <section
      css={{
        display: 'none',
        ...mixin.desktopMediaSupportsGrid({
          display: 'grid',
          position: 'relative',
          // ...mixin.size('100%', '100vh'),
          minHeight: '100%',
          ...mixin.flex('column'),
          alignItems: 'center',
          // justifyContent: 'center',
          boxShadow: '0.25rem 0.25rem 0.25rem 0px rgba(38, 38, 38, 0.25)',
          backgroundColor: colors.muteGray
        })
      }}
    >
      <MenuBar
        styles={{
          ...mixin.flex('column'),
          height: '100vh',
          position: 'fixed',
          padding: '3rem 0'
        }}
      >
        <LogoMaster
          styles={{
            maxWidth: '6rem'
          }}
        />
        <NavContainer
          styles={{
            margin: '4rem 0'
          }}
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
        </NavContainer>
        <div
          css={{
            ...mixin.flex('row'),
            alignItems: 'center'
          }}
        >
          {socialMedia.map(social => (
            <SocialIcon
              key={social.platform}
              color={'black'}
              styles={{
                display: 'block',
                ...mixin.size('100%', 'auto'),
                padding: '0.25rem',
                maxWidth: '2rem',
                minHeight: '1rem',
                minWidth: '1rem',

                '&:hover': {
                  svg: {
                    fill: colors.orange
                  }
                }
              }}
              {...social}
            />
          ))}
        </div>
      </MenuBar>
    </section>
  )
}

export default SideMenu
