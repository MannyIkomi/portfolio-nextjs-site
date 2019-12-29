/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { colors } from '../styles'

const FillOverlay = props => {
  return (
    <Fragment>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background-color: ${colors.orange};
          opacity: 1;
          mix-blend-mode: multiply;
        `}
      />
      <div
        css={css`
          width: 100%;
          height: 100%;
          padding: 1rem;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          position: absolute;
          bottom: 0;

          ::before {
            content: url('/static/motif-gallery.svg');
            position: absolute;
            top: -1px;
            right: -1px;
            width: 50%;
            height: auto;
          }
        `}
      >
        {props.children}
      </div>
    </Fragment>
  )
}
export default FillOverlay
