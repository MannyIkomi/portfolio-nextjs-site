/** @jsx jsx */
// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

// Components
import { WithSwitchToggle } from './navigation/navigation'
import DockedMenu from './navigation/dockedMenu'
import SideMenu from './navigation/sideMenu'
import HtmlHead from './head'
import Footer from './footer'

// Styling
import { GlobalStyles, mixin, colors, typography, measure } from '../styles'

const shouldShowSideMenuGrid = (isSideMenuDisabled = false) => {
  if (isSideMenuDisabled === true) {
    // remove grid SideMenu
    return `
      display: grid;
      grid-template-areas:
      'header'
      'main'
      'footer';
      grid-template-columns: 1fr;
      `
  } else {
    // show SideMenu in Grid left column
    return `
      display: grid;
      grid-template-areas:
      'header main'
      'footer footer';    
      grid-template-columns: minmax(10rem, 15rem) 1fr;
      grid-template-rows: min-content calc(100vh - ${measure.menubarHeight});
      `
  }
}

const PageLayout = props => {
  const { title, description, isSideMenuDisabled } = props
  // Page level template
  return (
    <div
      css={css`
        margin: 0 0 ${measure.menubarHeight} 0;
        background-color: ${colors.muteGray};
        @media (hover: hover), (${measure.tabletMediaWidth}) {
          margin: ${measure.menubarHeight} 0 0 0;
        }
        ${mixin.desktopMedia(`
          ${mixin.supportsGrid(`
            display: grid;
            ${shouldShowSideMenuGrid(isSideMenuDisabled)}
          `)}
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
