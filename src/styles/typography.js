import { colors } from "./colors"
import { onHover, onDesktopMedia, onTabletMedia } from "./mixin";
import { keyframes } from "@emotion/react";

export const SANS_TYPE = {
  fontFamily: 'Fira Sans, sans-serif',
}

export const CODE_TYPE = {
  fontFamily: 'Fira Code, monospace',
  // fontFeatureSettings: `calt 1`, /* Enable ligatures for IE 10+, Edge */
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
  textDecorationColor: colors.ACCENT,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

}
export const imageCaption = {
  
    ...SANS_TYPE,
    fontSize: "0.75rem",
    fontWeight: 300,
    lineHeight: 1.4,
  
}

export const typeset = (override = {}) => ({
  transformOrigin: "center center",
  transform: "perspective(40rem) rotateX(180deg)", 
  ...override,
})

export const typesetTransform = (override = {}) => ({
  transformOrigin: "center center",
    color: colors.ACCENT,
    ...typeset(),
    ...override,
})

export const hoverTypesetTransform = (override ={}) => ({
  ...onHover({
    ...typesetTransform(),
    ...override
  })
})

export function typesetAnimation(overrides = {}) {
  const typesetKeyframes = keyframes({
    from: {
      ...typeset()
    },
    to: {
      transform: "rotateX(0)",
    },
  })

  return {
    display: "inline-block",
    ...typeset(),

    animationName: typesetKeyframes,
    animationDuration: "300ms",
    animationFillMode: "forwards",
    animationIterationCount: 1,

    ...overrides,
  }
}

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

export const headingResponsiveScale = {
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
}