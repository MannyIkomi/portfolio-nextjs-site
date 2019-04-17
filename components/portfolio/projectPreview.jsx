import React, { Component, Fragment, useState } from 'react'

import { convertEpochToDate } from '../../util/dates.js'
import '../../sass/projects.scss'
// import { kebabCase } from 'lodash'

const FillOverlay = props => {
  return (
    <Fragment>
      <div className="overlay" />
      <div className="children">{props.children}</div>
    </Fragment>
  )
}

const ProjectCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption className="display">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </figcaption>
  )
}

const WithHoverState = props => {
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

const ProjectCover = props => {
  const selectCoverSize = 'original'
  const linkPath = 'projects'

  const { handleMouseEnter, handleMouseLeave } = props
  const { id, name, description, covers, slug } = props.project

  return (
    <WithHoverState
      render={(isHovered, handleMouseEnter, handleMouseLeave) => (
        <figure
          className="project preview "
          onMouseEnter={handleMouseEnter || null}
          onMouseLeave={handleMouseLeave || null}
        >
          <a
            href={`${linkPath}/${slug || id}`}
            className="aspect link"
            id={slug || id}
          >
            <CoverImg src={covers[selectCoverSize]} alt={name} />
            {isHovered ? (
              <FillOverlay>
                <ProjectCaption title={name} subtitle={description} />
              </FillOverlay>
            ) : null}
          </a>
        </figure>
      )}
    />
  )
}

export { ProjectCover, WithHoverState }
