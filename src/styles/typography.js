import { colors } from "./colors"
import { onHover, onDesktopMedia, onTabletMedia } from "./mixin";
import { keyframes } from "@emotion/react";

export const SANS_TYPE = {
  fontFamily: 'Fira Sans, sans-serif',
}

export const CODE_TYPE = {
  fontFamily: 'Fira Code, monospace',
  fontFeatureSetting: `calt 1`, /* Enable ligatures for IE 10+, Edge */
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
  display: "inline",
  color: colors.MID_BLUE,
  fontSize: 'inherit',
  
  textDecoration: "underline",
  textDecorationThickness: '0.1rem',
  textUnderlineOffset: '0.25rem',
  
  '&:hover': {
    color: colors.ACCENT,
  }
  // textDecorationColor: colors.ACCENT,
  // text underline new CSS features
  // https://www.youtube.com/watch?v=sZS-7RX_c7g

}
export const captionText = {
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

export const headingResponsiveScale = {
  // https://type-scale.com/?size=16&scale=1.333&text=A%20Visual%20Type%20Scale&font=Fira%20Sans&fontweight=500&bodyfont=body_font_default&bodyfontweight=300&lineheight=1.5&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
  h1: {
    fontSize: "2.369rem",
  },
  h2: {
    fontSize: "1.777rem",
  },
  h3: {
    fontSize: "1.333rem",
  },
  h4: {
    fontSize: "1",
  },

  ...onTabletMedia({
    
    // h1: { (for emphasized titles)
    //   fontSize: "5.61rem",
    // },
    h1: {
      fontSize: "4.209rem",
    },
    h2: {
      fontSize: "3.157rem",
    },
    h3: {
      fontSize: "2.369rem",
    },
    h4: {
      fontSize: "1.777rem",
    },
  }),
}


export const typography = {
  CODE_TYPE,
   
   SANS_TYPE,
   
   
   typesetTransform,
   hoverTypesetTransform,
  fontSizeTransition,
  linkText,
  resumeContentHeading,
  headingResponsiveScale
  // linkStyles,
  // typesetAnimation,
  // maxReadingWidth,
}
