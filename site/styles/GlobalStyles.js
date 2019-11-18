import React from 'react'
import { css, Global } from '@emotion/core'
import { typography } from './typography'
import { colors } from './colors'
import { reset } from './reset'

export const GlobalStyles = props => {
  // menubarPosition state to match the containing element margin?
  return (
    <Global
      styles={css`
        ${reset}
        :root {
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
            color: ${colors.orange};
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
          line-height: 1.2;
          ${typography.sizeTransition}
          font-family: ${typography.serif};
          text-transform: lowercase;
          
        }

        p,
        span {
          font-family: ${typography.sans};
          ${typography.sizeTransition}
          font-size: 1.25rem;
          line-height: 1.4;
        }

        ul {
          li {
            list-style: square;
          }
        }

        h1 {
          font-size: 2rem;
        }
        h2{
          font-size: 1.5rem;
        }

        @media screen and (min-width: 700px) {
          :root {
            font-size: 105%;
          }
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.5rem;
          }
        }
        
        @media screen and (min-width: 1100px) {
          :root {
            font-size: 110%;
          }
          h1 {
            font-size: 4rem;
          }
                      h2 {
                        font-size: 3rem;
                      }
        }
      `}
    />
  )
}
export default GlobalStyles
/* SASS syntax CTA Button
.cta {
  cursor: pointer;

  @include header-style($futura);
  font-size: 2rem;
  font-weight: 800;

  color: white;
  background-color: $orange;

  &:hover {
    background-color: $deep-gray;
  }
  &.layout {
    position: relative;
    padding: 1rem 4rem;
    margin: auto;
  }
  &::before,
  &::after {
    display: block;
    position: absolute;
    @include size(4rem, 100%);

    background-size: contain;
    background-repeat: no-repeat;
  }

  &::before {
    content: '';
    background-image: url('/static/motif-left.svg');
    background-position: left bottom;
    left: -1px;
    bottom: 0;
  }
  &::after {
    content: '';
    background-image: url('/static/motif-right.svg');
    background-position: right top;
    right: -1px;
    top: 0;
  }
}
 */
