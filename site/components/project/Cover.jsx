/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import {
  colors,
  measure,
  mixin,
  typography,
  aspectRatioLetter
} from '../../styles'
import Link from 'next/link'
import PropTypes from 'prop-types'

import ProjectPage from '../../pages/projects'
import FillOverlay from '../overlay'
import { CMS_URL } from '../../config'
import { ProjectPhoto } from './Photo'
import { WithHoverState } from '../WithHoverState'
import { projectProps } from '../../util/props'

const CoverCaption = ({ title, subtitle, ...props }) => {
  return (
    <figcaption
      css={{
        'h1,h2': {
          color: 'white'
        }
      }}
    >
      <h1
        css={{
          fontFamily: typography.sans,
          textTransform: 'capitalize',
          fontWeight: 'bold',
          fontSize: '2rem',
          ...mixin.desktopMedia({ fontSize: '3rem' })
        }}
      >
        {title}
      </h1>
      <h2
        css={{
          fontFamily: typography.serif,
          fontStyle: 'italic',
          fontWeight: '400',
          fontSize: '1.5rem',
          lineHeight: '1.4'
        }}
      >
        {subtitle}
      </h2>
    </figcaption>
  )
}
CoverCaption.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export const Cover = ({ project = {}, ...props }) => {
  // const { project } = props
  const { id, name, description, cover, slug, title } = project

  return (
    <Fragment>
      <WithHoverState
        render={(isHovered, handleMouseEnter, handleMouseLeave) => (
          <figure
            css={{
              ...aspectRatioLetter,
              overflow: 'hidden', // clips aspect ratio overflow
              position: 'relative',
              marginBottom: '4rem',
              width: '100%',
              ':hover': {
                cursor: 'pointer'
              },
              [`@media (hover: hover) `]: {
                '&:hover': {
                  boxShadow: '-0.5rem 0.5rem 0.5rem 0px hsla(0, 0%, 0%, 0.85)'
                }
              }
            }}
            onMouseEnter={handleMouseEnter || null}
            onMouseLeave={handleMouseLeave || null}
          >
            <Link href={`/projects/?slug=${slug}`} as={`/projects/${slug}`}>
              <a
                // className="aspect link relative"
                css={{
                  display: 'block',
                  position: 'relative'
                }}
              >
                <ProjectPhoto
                  src={`${CMS_URL}${cover.url}`}
                  alt={project.coverAlt}
                />
                {isHovered ? (
                  <FillOverlay>
                    <CoverCaption title={title} subtitle={description} />
                  </FillOverlay>
                ) : null}
              </a>
            </Link>
            {/* {isHovered ? null : (
            <ProjectCaption title={name} subtitle={description} />
          )} */}
          </figure>
        )}
      />
    </Fragment>
  )
}

Cover.propTypes = {
  coverSize: PropTypes.string,
  project: projectProps
}

export default Cover
