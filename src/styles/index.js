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
  backgroundColor: colors.darkGray80,
  ...override,
})

export const styleTransition = (override = {}) => ({
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",
  transitionProperty:
    "transform, opacity, color, filter, background-color, fill",
  ...override,
})

export const moduleContainer = (override = {}) => ({
  margin: "2rem 0",

  boxShadow: "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.5)",
  ...onTabletMedia({
    margin: "3rem 0",
    // maxHeight: "80vh",
  }),
  ...onDesktopMedia({
    margin: "4rem 0",
  }),
  ...override,
})


export const maxLineMeasure = {
  maxWidth: "72ch",
}

export const ulStyles = {
  listStyle: "square",
  paddingLeft: "1.25rem",
}

export const aspectRatioLetter = {
  height: 0,
  paddingBottom: "calc(100% * (17 / 22) - 1px )",
}


export const h1Text = override => ({
  fontSize: "2rem",
  color: colors.orange,
  ...onTabletMedia({
    fontSize: "2.5rem",
  }),
  ...onDesktopMedia({
    fontSize: "3rem",
  }),
})


export const linkActive = (override = {}) => ({
  color: colors.mediumGray,
  ...override,
})

export const GLOBAL = {
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    // fontSize: "100%",
    scrollBehavior: "smooth",
    ...SANS_TYPE,
  },
  main: {
    width: "100%",
  },
  // body: {
  //   overflow: "hidden",
  //   overflowX: "hidden",
  // },
  a: {
    // https://stackoverflow.com/questions/1823341/how-do-i-get-this-css-text-decoration-override-to-work
    // setting text decoration as an inherited property cannot be overrided due to user agent implementations
    // best to clear styling an re-apply using composition
    color: "inherit",
    textDecoration: `none`,
    // textDecoration: `underline solid ${colors.orange}`,
    // textDecorationColor: colors.orange,
    // textDecorationStyle: "solid",

    "&:hover": {
      color: colors.orange,
    },
  },
  button: {
    display: "inline-block",
    padding: 0,
    margin: 0,
    border: "none",
    outline: "none",

    cursor: "pointer",

    textAlign: "center",
    textDecoration: "none",
  },

  "h1, h2, h3, h4, h5": {
    lineHeight: 1.2,
    ...fontSizeTransition,
    
    ...CODE_TYPE,
    textTransform: "lowercase",
    fontWeight: "normal",
  },
  "p, span, ul, ol, button": {
    ...SANS_TYPE,
    ...FUTURA_BODY_SIZE,
    
    lineHeight: 1.4,
    listStyle: "square",
    fontVariantNumeric: "proportional-nums",
  },

  h1: {
    fontSize: "2rem",
    color: colors.orange,
  },
  h2: {
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.333rem",
  },
  h4: {
    fontSize: "1.25rem",
  },

  ...onTabletMedia({
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.3333rem",
    },
  }),

  ...onDesktopMedia({
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.25rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
  }),
}

export * from "./colors"
export * from "./mixin"
export * from "./reset"
export * from './typography'
// export * from './moduleContainer'
// export * from './GlobalStyles'
