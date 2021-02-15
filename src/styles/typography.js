import { colors } from "./colors"
import { onHover } from "./mixin";

export const SERIF_TYPE = { fontFamily: "baskerville-urw, Georgia, serif" }
export const SANS_TYPE = {
  fontFamily: 'Fira Sans, sans-serif',
}

export const SERIF_HEADING = { fontFamily: "baskerville-urw, serif" }
export const SANS_HEADING = {
  ...SANS_TYPE
}
export const FUTURA_BODY_SIZE = { fontSize: "1.3rem" }

export const CODE_TYPE = {
  fontFamily: 'Fira Code, monospace',
  fontFeatureSettings: `calt`, /* Enable ligatures for IE 10+, Edge */
  textRendering: 'optimizeLegibility', /* Force ligatures for Webkit, Blink, Gecko */
  fontVariantLigatures: 'contextual',
}

export const fontSizeTransition = {
  transitionProperty: "font-size",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "300ms",
  transitionDelay: "300ms",
}

export const linkText = {
  ...CODE_TYPE,
  fontSize: 'inherit',
  display: "inline-block",
  textDecoration: "underline",
  // padding: "0.25rem 0",
  textDecorationColor: colors.YELLOW,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

  // "&:hover": {
  //   color: colors.YELLOW,
  // },
}

export const typeset = (override = {}) => ({
  transformOrigin: "center center",
  transform: "rotateX(180deg) perspective(2rem)", 

  ...override,
})

export const typesetHover = (override = {}) => ({
  transformOrigin: "center center",
  ...onHover({
    color: colors.TURQUOISE,
    ...typeset(),
    ...override,
  })
  
})

export const resumeContentHeading = {
  ...SANS_HEADING,
  textTransform: "initial",
  lineHeight: 1.2,
  
}

export const typography = {
   SERIF_TYPE,
   SANS_TYPE,
   SANS_HEADING,
   SERIF_HEADING,
   typesetHover,
  fontSizeTransition,
  linkText,
  resumeContentHeading,
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}