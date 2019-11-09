import { measure } from './measure'

export const aspectRatioLetter = {
  height: 0,
  paddingBottom: 'calc(100% * (17 / 22))'
}

const tabletMediaQuery = `@media screen and (${measure.tabletMediaWidth})`
const desktopMediaQuery = `@media screen and (${measure.desktopMediaWidth})`

export const mixin = {
  flex: direction => ({ display: 'flex', flexDirection: direction }),

  size: (width = '100%', height = 'auto') => ({ width, height }),

  supportsGrid: ({ display = 'grid', ...hasSupport }) => ({
    '@supports (display: grid)': {
      display: display,
      ...hasSupport
    }
  }),

  tabletMedia: (tabletStyles = {}) => ({
    [tabletMediaQuery]: {
      ...tabletStyles
    }
  }),

  desktopMedia: (desktopStyles = {}) => ({
    [desktopMediaQuery]: {
      ...desktopStyles
    }
  }),

  // tabletMediaGrid: ({ display = 'grid', ...hasSupport }) => {},

  desktopMediaSupportsGrid: ({ display = 'grid', ...hasSupport } = {}) => {
    return {
      [desktopMediaQuery]: {
        '@supports (display: grid)': {
          display,
          ...hasSupport
        }
      }
    }
  },
  aspectRatioLetter
}

export * from './colors'
export * from './typography'
export * from './measure'
export * from './moduleContainer'
export * from './GlobalStyles'
