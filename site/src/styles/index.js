import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"

export const serifType = "baskerville-urw, Georgia, serif"
export const sansType = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const menubarHeight = "2.5rem"
export const desktopWidth = `1200px`
export const tabletWidth = `700px`
export const touchTarget = "3rem"
// export const

export const tabletMediaQuery = `@media screen and (min-width: ${tabletWidth})`
export const desktopMediaQuery = `@media screen and (min-width: ${desktopWidth})`

export const sizeTransition = {
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
  fontFamily: sansType,
  display: "inline-block",
  textDecoration: "underline",
  padding: "0.25rem 0",
  textDecorationColor: colors.orange,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

  "&:hover": {
    color: colors.orange,
  },
}

export const typesetInteraction = {
  transition: "all 300ms ease-in-out",
  ":hover": {
    transform: "rotateX(180deg)",
  },
}

export const typography = {
  typesetInteraction,
  serif: serifType,
  sans: sansType,
  sizeTransition,
  textLink,
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}

export const global = {
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    fontSize: "100%",
    fontFamily: typography.sans,
  },
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
  "h1, h2, h3, h4, h5": {
    lineHeight: 1.2,
    ...sizeTransition,
    fontFamily: typography.serif,
    textTransform: "lowercase",
    fontWeight: "normal",
  },
  "p, span": {
    fontFamily: typography.serif,
    fontSize: "1rem",
    lineHeight: 1.4,
  },
  ul: {
    li: {
      listStyle: "square",
    },
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
