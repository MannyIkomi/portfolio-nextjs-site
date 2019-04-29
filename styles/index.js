import React from 'react'
import { css, Global } from '@emotion/core'

export const colors = {
  orange: '#ff5e00',
  muteGray: '#f2f2f2',
  mediumGray: '#808080',
  darkGray: '#262626'
}

export const measure = {
  menubarHeight: '2.5rem',
  desktopMediaWidth: `min-width: 1200px`,
  tabletMediaWidth: `min-width: 750px`
}

export const typography = {
  serif: 'baskerville-urw, Georgia, serif',
  sans: 'futura-pt, "Helvetica Neue", Helvetica, sans-serif'
}

export const mixin = {
  flex: direction => `display: flex; flex-direction: ${direction};`,

  size: (width = '100%', height = 'auto') =>
    `width: ${width}; height: ${height};`,

  supportsGrid: (hasSupport = '') => {
    return `
      @supports (display: grid) {
        ${hasSupport}
      }
    `
  },

  tabletMedia: (tabletStyles = '') => {
    return `
    @media screen and (${measure.desktopMediaWidth}) {
      ${tabletStyles}
    }`
  },
  desktopMedia: (desktopStyles = '') => {
    return `
    @media screen and (${measure.desktopMediaWidth}) {
      ${desktopStyles}
    }`
  },

  desktopMediaSupportsGrid: (hasSupport = '') => {
    return `
      @media screen and (${measure.desktopMediaWidth}) {
        @supports (display: grid) {
          ${hasSupport}
        }
      }`
  },
  aspectRatioLetter: () => `height: 0; padding-bottom: calc(100% * (17 / 22));`
}

export const GlobalStyles = props => {
  // menubarPosition state to match the containing element margin?
  return (
    <Global
      styles={css`
        ${reset}
        #__next {
          margin-bottom: ${measure.menubarHeight};
        }

        :root {
          transition-property: font-size;
          transition-timing-function: ease;
          transition-duration: 0.5s;
          transition-delay: 0.5s;
          font-size: 100%;
          font-family: ${typography.sans};
        }

        * {
          box-sizing: border-box;
        }
        a {
          color: inherit;
          text-decoration: inherit;
          &:hover {
            color: $orange;
          }
        }
        button {
          border: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          line-height: 1.1;
        }

        p,
        span {
          font-family: ${typography.sans};
          font-size: 1.25rem;
          line-height: 1.4;
        }

        h1 {
          font-size: 2rem;
        }

        @media screen and (min-width: 700px) {
          :root {
            font-size: 106%;
          }
          h1 {
            font-size: 3rem;
          }
        }

        @media screen and (min-width: 1100px) {
          :root {
            font-size: 112%;
          }
          h1 {
            font-size: 4rem;
          }
        }
      `}
    />
  )
}

// html5doctor.com Reset Stylesheet
// v1.6.1
// Last Updated: 2010-09-17
// Author: Richard Clark - http://richclarkdesign.com
// Twitter: @rich_clark

const reset = `
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}

q {
  &:before,
  &:after {
    content: '';
    content: none;
  }
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colours to suit your needs */

ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */

mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border color to suit your needs */

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

`
