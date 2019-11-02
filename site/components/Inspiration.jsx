/** @jsx jsx */
// Modules
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { typography, colors, linkStylingBase } from '../styles'
import { CMS_URL } from '../config'
import Markdown from './markdown'
import { imageProps, inspirationProps } from '../util/props'
import { InlineLink } from './navigation/navigation'

export const Inspiration = props => {
  const { name, description, photo, website } = props

  const designerInspirationStyles = css`
    margin: 2rem 0;
    color: ${colors.muteGray};
    h3 {
      font-family: ${typography.sans};
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  `
  return (
    <section className="designer" css={[designerInspirationStyles]}>
      {photo && (
        <img
          css={{ maxWidth: '100%' }}
          src={CMS_URL + photo.url}
          alt={`Picture of ${name}`}
        />
      )}

      {website ? (
        <InlineLink href={website}>
          <h3>{name}</h3>
        </InlineLink>
      ) : (
        <h3>{name}</h3>
      )}

      {props.children || description}
    </section>
  )
}
Inspiration.propTypes = {
  ...inspirationProps
}
