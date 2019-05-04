import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// import '../../sass/portfolio.scss'
import '../../sass/projectCover.scss'
import ProjectPage from '../../pages/portfolio'

const FillOverlay = props => {
  return (
    <Fragment>
      <div className="overlay" />
      <div className="content">{props.children}</div>
    </Fragment>
  )
}

const CoverCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption className="caption">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </figcaption>
  )
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

const CoverImg = ({ src, alt }) => <img className="cover" src={src} alt={alt} />

export const ProjectCover = props => {
  const size = 'original'
  const { coverSize, project } = props
  const { id, name, description, covers, slug } = project

  return (
    <WithHoverState
      render={(isHovered, handleMouseEnter, handleMouseLeave) => (
        <figure
          className="project preview"
          onMouseEnter={handleMouseEnter || null}
          onMouseLeave={handleMouseLeave || null}
        >
          <Link
            href={`/portfolio/?slug=${slug}`}
            as={`/portfolio/${slug.toLowerCase()}`}
          >
            <a className="aspect link relative">
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
