/** @jsx jsx */
// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
//

// Components
import { WithSwitchToggle, DockedMenu, SideMenu } from './navigation/navigation'
import HtmlHead from './head'
import Footer from './footer'
//

// Styling
import { GlobalStyles, mixin, color, typography } from '../styles'
//

const PageLayout = props => {
  const { title, description } = props
  // Page level template
  return (
    <div
      css={css`
        ${mixin.desktopMediaSupportsGrid(`
          display: grid;

          grid-template-areas:
          'header main'
          'header footer';

          grid-template-columns: minmax(10rem, 20rem);
        `)}
      `}
    >
      <HtmlHead
        pageTitle={title || 'Design Thinker, Lifetime Learner — Manny Ikomi'}
        description={
          description ||
          `Design thinker, lifetime learner, adoring guncle. I like making great things for good people.`
        }
      />
      <GlobalStyles />
      <header
        css={css`
          grid-area: header;
        `}
      >
        <WithSwitchToggle
          render={(menuToggled, handleMenuToggled) => {
            return (
              <DockedMenu
                menuToggled={menuToggled}
                handleMenuToggle={handleMenuToggled}
              />
            )
          }}
        />
        <SideMenu />
      </header>
      <main
        css={css`
          gride-area: main;
        `}
      >
        {props.children}
      </main>
      <Footer
        css={css`
          grid-area: footer;
        `}
      />
    </div>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PageLayout
