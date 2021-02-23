import { colors } from "./colors"
import { onHover } from "./mixin";

export const SERIF_TYPE = { fontFamily: "baskerville-urw, Georgia, serif" }
export const SANS_TYPE = {
  fontFamily: 'Fira Sans, sans-serif',
}

export const SERIF_HEADING = { fontFamily: "baskerville-urw, serif" }


export const CODE_TYPE = {
  fontFamily: 'Fira Code, monospace',
  fontFeatureSettings: `calt 1`, /* Enable ligatures for IE 10+, Edge */
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
  display: "inline-block",
  color: 'inherit',
  fontSize: 'inherit',

  textDecoration: "underline",
  textDecorationThickness: '0.1rem',
  textUnderlineOffset: '0.25rem',
  textDecorationColor: colors.TURQUOISE,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

}

export const typeset = (override = {}) => ({
  transformOrigin: "center center",
  transform: "perspective(10vw) rotateX(180deg)", 
  ...override,
})

export const typesetTransform = (override = {}) => ({
  transformOrigin: "center center",
    color: colors.TURQUOISE,
    ...typeset(),
    ...override,
})

export const hoverTypesetTransform = (override ={}) => ({
  ...onHover({

    ...typesetTransform(),
    ...override
  })
})

export const resumeContentHeading = {
  ...SANS_TYPE,
  textTransform: "initial",
  lineHeight: 1.2,
}

export const typography = {
  CODE_TYPE,
   
   SANS_TYPE,
   
   
   typesetTransform,
   hoverTypesetTransform,
  fontSizeTransition,
  linkText,
  resumeContentHeading,
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}