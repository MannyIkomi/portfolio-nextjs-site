import { measure } from './measure'

export const mixin = {
  flex: direction => `display: flex; flex-direction: ${direction};`,

  size: (width = '100%', height = 'auto') =>
    `width: ${width}; height: ${height};`,

  supportsGrid: (hasSupport = '') => {
    return `
      @supports (display: grid) {
        ${hasSupport}
      }
    `
  },

  tabletMedia: (tabletStyles = '') => {
    return `
    @media screen and (${measure.desktopMediaWidth}) {
      ${tabletStyles}
    }`
  },
  desktopMedia: (desktopStyles = '') => {
    return `
    @media screen and (${measure.desktopMediaWidth}) {
      ${desktopStyles}
    }`
  },

  desktopMediaSupportsGrid: (hasSupport = '') => {
    return `
      @media screen and (${measure.desktopMediaWidth}) {
        @supports (display: grid) {
          ${hasSupport}
        }
      }`
  },
  aspectRatioLetter: () => `height: 0; padding-bottom: calc(100% * (17 / 22));`
}

export * from './colors'
export * from './typography'
export * from './measure'
export * from './moduleContainer'
export * from './GlobalStyles'
