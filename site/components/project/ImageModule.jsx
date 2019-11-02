/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { mixin, moduleContainer } from '../../styles'
import { moduleProps } from '../../util/props'
import { CMS_URL } from '../../config'

export const ImageModule = props => {
  const { image, imageAlt } = props.module
  return (
    <figure
      css={[
        moduleContainer,
        css`
          width: 100%;
          img {
            object-fit: fill;
            ${mixin.size('100%', '100%')};
          }
        `
      ]}
    >
      <img src={CMS_URL + image.url} alt={imageAlt} />
    </figure>
  )
}
ImageModule.propTypes = moduleProps
