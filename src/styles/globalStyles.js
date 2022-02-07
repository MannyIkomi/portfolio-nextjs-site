import { headingsDesktop, headings } from "."
import { colors } from "./colors"
import { onTabletMedia, onDesktopMedia } from "./mixin"
import { firaSans, fontSizeTransition, firaCode } from "./typography"

export const GLOBAL = {
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    // fontSize: "100%",
    scrollBehavior: "smooth",
    ...firaSans,
  },
  main: {
    width: "100%",
  },

  a: {
    // https://stackoverflow.com/questions/1823341/how-do-i-get-this-css-text-decoration-override-to-work
    // setting text decoration as an inherited property cannot be overrided due to user agent implementations
    // best to clear styling an re-apply using composition
    color: "inherit",
    textDecoration: `none`,
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
  "h1, h2, h3, h4, h5, h6": {
    ...firaSans,
    ...fontSizeTransition,
    lineHeight: 1.2,
    fontWeight: 500,
    color: colors.PRIMARY,
  },
  "p, span, ul, ol, button": {
    ...firaSans,
    fontWeight: 300,
    lineHeight: 1.6,
    fontVariantNumeric: "proportional-nums",
    color: colors.PRIMARY,
  },

  ...headings,
  ...onTabletMedia(headingsDesktop),
}
