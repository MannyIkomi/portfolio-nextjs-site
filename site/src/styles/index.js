// import { measure } from "./measure"

export const serif = "baskerville-urw, Georgia, serif"
export const sans = 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'

export const menubarHeight = "2.5rem"
export const desktopMediaWidth = `min-width: 1200px`
export const tabletMediaWidth = `min-width: 700px`

export const tabletMediaQuery = `@media screen and (${tabletMediaWidth})`
export const desktopMediaQuery = `@media screen and (${desktopMediaWidth})`

export const sizeTransition = {
  transitionProperty: "font-size",
  transitionTimingFunction: "ease",
  transitionDuration: "0.5s",
  transitionDelay: "0.5s",
}

export const ulStyles = {
  listStyle: "square",
  paddingLeft: "1.25rem",
}

export const aspectRatioLetter = {
  height: 0,
  paddingBottom: "calc(100% * (17 / 22))",
}

export const flex = (direction = "column") => ({
  display: "flex",
  flexDirection: direction,
})

export const typography = {
  serif,
  sans,
  sizeTransition,
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}

export * from "./colors"
export * from "./mixin"
// export * from './moduleContainer'
// export * from './GlobalStyles'
