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

// Styling
import { GlobalStyles, mixin, color, typography, measure } from '../styles'

const PageLayout = props => {
  const { title, description, isSideMenuDisabled } = props
  // Page level template
  return (
    <div
      css={css`
        ${mixin.desktopMediaSupportsGrid(`
          display: grid;
          ${
            isSideMenuDisabled
              ? `
            grid-template-areas:
            'header'
            'main'
            'footer';
            grid-template-columns: 1fr;`
              : `
                grid-template-areas:
                'header main'
                'footer footer';    
               grid-template-columns: minmax(10rem, 15rem) 1fr;
               grid-template-rows: min-content calc(100vh - ${
                 measure.menubarHeight
               });`
          }
        `)}
      `}
    >
      <HtmlHead pageTitle={title} description={description} />
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
        {isSideMenuDisabled ? null : <SideMenu />}
      </header>
      <main
        css={css`
          grid-area: main;
        `}
      >
        {props.children}
      </main>
      <Footer
        styles={css`
          grid-area: footer;
        `}
      />
    </div>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSideMenuDisabled: PropTypes.bool.isRequired
}
PageLayout.defaultProps = {
  title: 'Design Thinker, Lifetime Learner — Manny Ikomi',
  description: `I like making great things for good people.`
}

export default PageLayout
