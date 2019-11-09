/** @jsx jsx */
// Modules
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { typography, colors, linkStyles } from '../styles'
import { CMS_URL } from '../config'
import Markdown from './markdown'
import { imageProps, inspirationProps } from '../util/props'
import { InlineLink } from './InlineLink'

export const Inspiration = ({
  name,
  description,
  photo,
  website,
  ...props
}) => {
  // const { name, description, photo, website } = props

  const designerInspirationStyles = {
    margin: '2rem 0',
    color: colors.muteGray,
    h3: {
      fontFamily: typography.sans,
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textTransform: 'capitalize'
    }
  }
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
