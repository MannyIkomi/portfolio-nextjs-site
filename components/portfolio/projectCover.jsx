/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { colors } from '../../styles'
import Link from 'next/link'
import PropTypes from 'prop-types'

// import '../../sass/portfolio.scss'
// import '../../sass/projectCover.scss'
import ProjectPage from '../../pages/portfolio'
import FillOverlay from '../overlay'

const CoverCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption className="caption">
      <h2
        // className="title"
        css={css`
          font-family: $futura;
          font-weight: bold;
          font-size: 2rem;
          color: white;
          text-transform: capitalize;
        `}
      >
        {title}
      </h2>
      <h3
        // className="subtitle"
        css={css`
          font-family: $baskerville;
          text-transform: capitalize;
          font-style: italic;
          font-size: 1rem;
          color: white;
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

const CoverImg = ({ src, alt }) => (
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
CoverImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export const ProjectCover = props => {
  const size = 'original'
  const { coverSize, project } = props
  const { id, name, description, covers, slug } = project

  return (
    <WithHoverState
      render={(isHovered, handleMouseEnter, handleMouseLeave) => (
        <figure
          // className="project preview"
          css={css`
            position: relative;
            margin-bottom: 4rem;
            width: 100%;
            &:hover {
              box-shadow: -0.5rem 0.5rem 0.5rem 0px hsla(0, 0%, 0%, 0.85);
            }
          `}
          onMouseEnter={handleMouseEnter || null}
          onMouseLeave={handleMouseLeave || null}
        >
          <Link
            href={`/portfolio/?slug=${slug}`}
            as={`/portfolio/${slug.toLowerCase()}`}
          >
            <a
              // className="aspect link relative"
              css={css`
                display: block;
                position: relative;
              `}
            >
              <CoverImg src={covers[size]} alt={name} />
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
