import { colors } from "./colors";
import { onTabletMedia, onDesktopMedia } from "./mixin";
import { SANS_TYPE, fontSizeTransition, CODE_TYPE } from './typography';

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

  "h1, h2, h3, h4, h5": {
    lineHeight: 1.2,
    ...fontSizeTransition,
    ...SANS_TYPE,
    // textTransform: "lowercase",
    fontWeight: 400,
  },
  "p, span, ul, ol, button": {
    ...SANS_TYPE,
    fontWeight: 300,

    lineHeight: 1.5,
    listStyle: "square",
    fontVariantNumeric: "proportional-nums",
  },

  'ul, ol' :{

  },

  h1: {
    fontSize: "2rem",
  },
  h2: {
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.333rem",
  },
  h4: {
    fontSize: "1.25rem",
  },

  ...onTabletMedia({
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.3333rem",
    },
  }),

  ...onDesktopMedia({
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "2.25rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
  }),
};
