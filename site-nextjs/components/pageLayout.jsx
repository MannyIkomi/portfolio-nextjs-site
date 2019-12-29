/** @jsx jsx */
// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import { WithToggleSwitch } from './navigation/WithToggleSwitch'
import { useToggleSwitch } from '../hooks/useToggleSwitch'
import DockedMenu from './navigation/dockedMenu'
import SideMenu from './navigation/sideMenu'
import HtmlHead from './head'
import Footer from './footer'

// Styling
import { mixin, GlobalStyles, typography, measure, colors } from '../styles'

const shouldShowSideMenuGrid = (shouldShow = true) => {
  const hideSideMenu = {
    display: 'grid',
    gridTemplateAreas: `'header' 'main' 'footer'`,
    gridTemplateColumns: '1fr'
  }

  const showSideMenu = {
    display: 'grid',
    gridTemplateAreas: `'header main' 'footer footer'`,
    gridTemplateColumns: `minmax(10rem, 15rem) 1fr`,
    gridTemplateRows: `min-content calc(100vh - ${measure.menubarHeight})`
  }

  return shouldShow ? showSideMenu : hideSideMenu
}

const PageLayout = ({
  title,
  description,
  hasSideMenu,
  persistDockedMenu,
  ...props
}) => {
  // Page level template
  const [menuToggled, setToggled] = useToggleSwitch(false)

  return (
    <div
      css={{
        margin: persistDockedMenu && `${measure.menubarHeight} 0 0 0`,
        backgroundColor: colors.muteGray,

        // [`@media (${measure.tabletMediaWidth})`]: {
        //   margin: `${measure.menubarHeight} 0 0 0`,
        //   margin: persistDockedMenu && `${measure.menubarHeight} 0 0 0`
        // },
        // [`@media (${measure.desktopMediaWidth})`]: {
        //   margin: '0',
        //   margin: persistDockedMenu && `${measure.menubarHeight} 0 0 0`
        // },
        ...mixin.desktopMediaSupportsGrid({
          ...shouldShowSideMenuGrid(hasSideMenu)
        })
      }}
    >
      <HtmlHead pageTitle={title} description={description} />
      <GlobalStyles />
      {props.children}
      <Footer
        styles={{
          gridArea: 'footer'
        }}
      />
    </div>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasSideMenu: PropTypes.bool.isRequired,
  persistDockedMenu: PropTypes.bool.isRequired
}
PageLayout.defaultProps = {
  title: 'Design Thinker, Lifetime Learner — Manny Ikomi',
  description: `I like making great things for good people.`
}

export default PageLayout
