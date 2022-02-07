import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"
import {
  MAX_TEXT_LENGTH,
  MAX_VIEW_LENGTH,
  MIN_TOUCH_SIZE,
  s1,
  s05,
} from "./spacing"
import { firaCode } from "./typography"

export const MENUBAR_HEIGHT = MIN_TOUCH_SIZE
export const TOUCH_TARGET = MIN_TOUCH_SIZE
export const PROJECT_SHADOW = `0rem ${s1} ${s1} ${s05} hsla(0, 0%, 0%, 0.5)`

export const tokenize = override => ({
  display: "inline-block",
  padding: "0.1rem 0.33rem",
  color: colors.LIGHT_GRAY,
  backgroundColor: colors.PRIMARY,
  ...override,
})

export const styleTransition = (override = {}) => ({
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",
  transitionProperty:
    "transform, opacity, color, filter, background-color, fill",
  ...override,
})

export const maxTypeWidth = {
  maxWidth: MAX_TEXT_LENGTH,
}
export const maxContainerWidth = {
  maxWidth: MAX_VIEW_LENGTH,
}

export const aspectRatioLetter = {
  height: 0,
  // change this to aspect-ratio property
  // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
  paddingBottom: "calc(100% * (17 / 22) - 1px)",
}

export const h1Text = override => ({
  fontSize: "2rem",
  color: colors.ACCENT,
  ...onTabletMedia({
    fontSize: "2.5rem",
  }),
  ...onDesktopMedia({
    fontSize: "3rem",
  }),
  ...override,
})

export const linkActive = (override = {}) => ({
  color: colors.ACCENT,
  ...override,
})

export * from "./globalStyles"
export * from "./colors"
export * from "./mixin"
export * from "./reset"
export * from "./typography"
export * from "./spacing"
