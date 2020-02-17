import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"

export const SERIF_TYPE = { fontFamily: "baskerville-urw, Georgia, serif" }
export const SANS_TYPE = {
  fontFamily: 'futura-pt, "Helvetica Neue", Helvetica, sans-serif',
}
export const SERIF_HEADING = { fontFamily: "baskerville-urw, serif" }
export const SANS_HEADING = {
  fontFamily:
    'futura-pt-bold, futura-pt, "Helvetica Neue", Helvetica, sans-serif',
}
export const FUTURA_BODY_SIZE = { fontSize: "1.2rem" }

/* 
font-family: futura-pt-bold, sans-serif;
font-weight: 700;
font-style: normal;
*/

/* 
Baskerville Display PT Regular

font-family: baskerville-display-pt, serif;
font-weight: 400;
font-style: normal;

Baskerville Display PT Italic

font-family: baskerville-display-pt, serif;
font-weight: 400;
font-style: italic;
*/

export const MENUBAR_HEIGHT = "2.5rem"
export const DESKTOP_VIEWPORT = `1200px`
export const TABLET_VIEWPORT = `700px`
export const TOUCH_TARGET = "3rem"
// export const

export const tabletMediaQuery = `@media screen and (min-width: ${TABLET_VIEWPORT})`
export const desktopMediaQuery = `@media screen and (min-width: ${DESKTOP_VIEWPORT})`

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

export const fontSizeTransition = {
  transitionProperty: "font-size",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "300ms",
  transitionDelay: "300ms",
}

export const maxLineMeasure = {
  maxWidth: "40rem", // ch support fallback
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

export const linkText = {
  ...SANS_TYPE,
  ...FUTURA_BODY_SIZE,
  display: "inline-block",
  textDecoration: "underline",
  // padding: "0.25rem 0",
  textDecorationColor: colors.orange,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

  "&:hover": {
    color: colors.orange,
  },
}

export const typesetInteraction = (override = {}) => ({
  transformOrigin: "center",
  ":hover": {
    transform: "rotateX(180deg)",
    ...override,
  },
})

export const resumeContentHeading = {
  ...SANS_HEADING,
  textTransform: "initial",
  lineHeight: 1.2,
  // fontWeight: "bold",
}

export const typography = {
  serifType: SERIF_TYPE,
  sansType: SANS_TYPE,
  sansHeading: SANS_HEADING,
  serifHeading: SERIF_HEADING,
  typesetInteraction,
  fontSizeTransition,
  linkText,
  resumeContentHeading,
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}

export const global = {
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    // fontSize: "100%",
    ...SANS_TYPE,
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
    ...SERIF_HEADING,
    textTransform: "lowercase",
    fontWeight: "normal",
  },
  "p, span, ul, ol, button": {
    ...SANS_TYPE,
    ...FUTURA_BODY_SIZE,
    lineHeight: 1.4,
    listStyle: "square",
    fontVariantNumeric: "proportional-nums ordinal",
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
  }),
}

export * from "./colors"
export * from "./mixin"
export * from "./reset"
// export * from './moduleContainer'
// export * from './GlobalStyles'
