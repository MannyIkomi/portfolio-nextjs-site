import { tabletMediaQuery } from "./index"

export const supportsGrid = ({ display = "grid", ...hasSupport }) => ({
  "@supports (display: grid)": {
    display: display,
    ...hasSupport,
  },
})

export const onTabletMedia = (tabletStyles = {}) => ({
  [tabletMediaQuery]: {
    ...tabletStyles,
  },
})
