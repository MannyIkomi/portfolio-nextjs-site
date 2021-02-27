import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"

import { SANS_TYPE,  SERIF_TYPE, typography, fontSizeTransition, CODE_TYPE} from './typography'


export const MENUBAR_HEIGHT = "2.5rem"
export const DESKTOP_VIEWPORT = `1200px`
export const TABLET_VIEWPORT = `700px`
export const TOUCH_TARGET = "3rem"
// export const
export const PROJECT_SHADOW = `0rem 1rem 1rem 0.5rem hsla(0, 0%, 0%, 0.5)`

export const tabletMediaQuery = `@media screen and (min-width: ${TABLET_VIEWPORT})`
export const desktopMediaQuery = `@media screen and (min-width: ${DESKTOP_VIEWPORT})`

export const tokenize = override => ({
  display: "inline-block",
  padding: "0.1rem 0.33rem",
  color: colors.LIGHT_GRAY,
  backgroundColor: colors.TURQUOISE,
  ...override,
})

export const styleTransition = (override = {}) => ({
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",
  transitionProperty:
    "transform, opacity, color, filter, background-color, fill",
  ...override,
})

export const MODULE_SHADOW = "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.5)"


export const maxReadingWidth = {
  maxWidth: "72ch",
}

export const ulStyles = {
  listStyle: "square",
  paddingLeft: "1.25rem",
  li: {
    '::marker': {
      ...CODE_TYPE,
      content: `"::"`
    }
  }
}

export const aspectRatioLetter = {
  height: 0,
  paddingBottom: "calc(100% * (17 / 22) - 1px )",
}

export const moduleContainerStyles = (override = {}) => ({
  margin: "2rem 0",
  width: '100%',
...maxContainerWidth,
  boxShadow: MODULE_SHADOW,
  
  ...onTabletMedia({
    margin: "3rem 0",
    // maxHeight: "80vh",
  }),
  ...onDesktopMedia({
    margin: "4rem 0",
  }),
  ...override,
})

export const h1Text = override => ({
  fontSize: "2rem",
  color: colors.TURQUOISE,
  ...onTabletMedia({
    fontSize: "2.5rem",
  }),
  ...onDesktopMedia({
    fontSize: "3rem",
  }),
})

export const linkActive = (override = {}) => ({
  color: colors.TURQUOISE,
  ...override,
})

export * from './globalStyles'
export * from "./colors"
export * from "./mixin"
export * from "./reset"
export * from './typography'

