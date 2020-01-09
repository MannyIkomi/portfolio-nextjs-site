import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"

export const serifType = { fontFamily: "baskerville-urw, Georgia, serif" }
export const sansType = {
  fontFamily: 'futura-pt, "Helvetica Neue", Helvetica, sans-serif',
}
export const serifHeading = { fontFamily: "baskerville-urw, serif" }
export const sansHeading = {
  fontFamily:
    'futura-pt-bold, futura-pt, "Helvetica Neue", Helvetica, sans-serif',
}
export const futuraBodySize = { fontSize: "1.2rem" }

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

export const menubarHeight = "2.5rem"
export const desktopWidth = `1200px`
export const tabletWidth = `700px`
export const touchTarget = "3rem"
// export const

export const tabletMediaQuery = `@media screen and (min-width: ${tabletWidth})`
export const desktopMediaQuery = `@media screen and (min-width: ${desktopWidth})`

export const styleTransition = (override = {}) => ({
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",
  transitionProperty: "transform, opacity, color, background-color, fill",
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
  paddingBottom: "calc(100% * (17 / 22))",
}

export const textLink = {
  ...sansType,
  ...futuraBodySize,
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
  ...sansHeading,
  textTransform: "initial",
  // fontWeight: "bold",
}

export const typography = {
  serifType,
  sansType,
  sansHeading,
  serifHeading,
  typesetInteraction,
  fontSizeTransition,
  textLink,
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
    ...sansType,
  },
  // body: {
  //   overflow: "hidden",
  // },
  a: {
    color: "inherit",
    textDecoration: `underline`,
    textDecoration: `underline solid ${colors.orange}`,
    textDecorationColor: colors.orange,
    textDecorationStyle: "solid",

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
    lineHeight: 1.3,
    ...fontSizeTransition,
    ...serifHeading,
    textTransform: "lowercase",
    fontWeight: "normal",
  },
  "p, span, ul, ol, li, button": {
    ...sansType,
    ...futuraBodySize,
    lineHeight: 1.4,
    listStyle: "square",
    fontVariantNumeric: "proportional-nums",
  },

  h1: {
    fontSize: "2rem",
    color: colors.orange,
  },
  h2: {
    fontSize: "1.667rem",
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
