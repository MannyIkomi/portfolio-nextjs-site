import { colors } from "./colors";
import { onTabletMedia, onDesktopMedia } from "./mixin";
import { SANS_TYPE, fontSizeTransition, CODE_TYPE, headingResponsiveScale } from './typography';

export const GLOBAL = {
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    // fontSize: "100%",
    scrollBehavior: "smooth",
    ...SANS_TYPE,
  },
  main: {
    width: "100%",
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
    ...SANS_TYPE,
    ...fontSizeTransition,
    lineHeight: 1.2,
    fontWeight: 500,
  },
  "p, span, ul, ol, button": {
    ...SANS_TYPE,
    fontWeight: 300,
    lineHeight: 1.5,
    fontVariantNumeric: "proportional-nums",
  },

  'ul, ol': {
    paddingLeft: '1.25rem'
  },

  ul: {
    listStyle: "square",
    paddingLeft: "1.25rem",
    li: {
      '::marker': {
        ...CODE_TYPE,
        content: `"::"`
      }
    }
  },
  ...headingResponsiveScale
};
