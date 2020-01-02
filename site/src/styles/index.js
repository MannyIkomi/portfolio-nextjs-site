import { colors } from "./colors"
import {} from "./mixin"

export const serifType = "baskerville-urw, Georgia, serif"
export const sansType = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const menubarHeight = "2.5rem"
export const desktopMediaWidth = `min-width: 1200px`
export const tabletMediaWidth = `min-width: 700px`
export const touchTarget = "3rem"

export const tabletMediaQuery = `@media screen and (${tabletMediaWidth})`
export const desktopMediaQuery = `@media screen and (${desktopMediaWidth})`

export const sizeTransition = {
  transitionProperty: "font-size",
  transitionTimingFunction: "ease",
  transitionDuration: "300ms",
  transitionDelay: "300ms",
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

export * from "./colors"
export * from "./mixin"
// export * from './moduleContainer'
// export * from './GlobalStyles'
