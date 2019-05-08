/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { colors, measure, mixin, typography } from '../../styles'
import Link from 'next/link'
import PropTypes from 'prop-types'

import ProjectPage from '../../pages/projects'
import FillOverlay from '../overlay'

const CoverCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption
      css={css`
        h2,
        h3 {
          color: white;
        }
      `}
    >
      <h2
        css={css`
          font-family: ${typography.sans};
          font-weight: bold;
          font-size: 2rem;
          @media screen and (min-width: 1200px) {
            font-size: 3rem;
          }
        `}
      >
        {title}
      </h2>
      <h3
        css={css`
          font-family: ${typography.serif};
          font-style: italic;
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 1.4;
        `}
      >
        {subtitle}
      </h3>
    </figcaption>
  )
}
CoverCaption.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export const WithHoverState = props => {
  const [isHovered, setIsHovered] = useState(false)
  const { render } = props

  function handleOnMouseEnter(e) {
    // console.log(e)
    setIsHovered(true)
  }
  function handleMouseLeave(e) {
    // console.log(e)
    setIsHovered(false)
  }
  return (
    <Fragment>
      {render(isHovered, handleOnMouseEnter, handleMouseLeave)}
    </Fragment>
  )
}

const ProjectPhoto = ({ src, alt }) => (
  <img
    css={css`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    `}
    src={src}
    alt={alt}
  />
)

ProjectPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export const ProjectCover = props => {
  const size = 'original'
  const { coverSize, project } = props
  const { id, name, description, covers, slug } = project

  return (
    <Fragment>
      <WithHoverState
        render={(isHovered, handleMouseEnter, handleMouseLeave) => (
          <figure
            css={css`
              position: relative;
              margin-bottom: 4rem;
              width: 100%;
              @media (hover: hover) {
                &:hover {
                  box-shadow: -0.5rem 0.5rem 0.5rem 0px hsla(0, 0%, 0%, 0.85);
                }
              }
              ${mixin.aspectRatioLetter()}
              overflow: hidden; // clips aspect ratio overflow
            `}
            onMouseEnter={handleMouseEnter || null}
            onMouseLeave={handleMouseLeave || null}
          >
            <Link
              href={`/projects/?slug=${slug}`}
              as={`/projects/${slug.toLowerCase()}`}
            >
              <a
                // className="aspect link relative"
                css={css`
                  display: block;
                  position: relative;
                `}
              >
                <ProjectPhoto src={covers[size]} alt={name} />
                {isHovered ? (
                  <FillOverlay>
                    <CoverCaption title={name} subtitle={description} />
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

ProjectCover.propTypes = {
  coverSize: PropTypes.string,
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string
  })
}

export default ProjectCover
