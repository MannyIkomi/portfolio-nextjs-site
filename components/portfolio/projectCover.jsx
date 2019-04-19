import React, { Component, Fragment, useState } from 'react'

// import '../../sass/portfolio.scss'
import '../../sass/projectCover.scss'

const FillOverlay = props => {
  return (
    <Fragment>
      <div className="overlay" />
      <div className="content">{props.children}</div>
    </Fragment>
  )
}

const PreviewCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption className="caption">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </figcaption>
  )
}

const ProjectCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption className="caption">
      <h3 className="subtitle">{subtitle}</h3>
      <h2 className="title">{title}</h2>
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
  const selectCoverSize = 'original'
  const projectPath = 'projects'

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
            href={`${projectPath}/${slug || id}`}
            className="aspect link relative"
            id={slug || id}
          >
            <CoverImg src={covers[selectCoverSize]} alt={name} />
            {isHovered ? (
              <FillOverlay>
                <PreviewCaption title={name} subtitle={description} />
              </FillOverlay>
            ) : null}
          </a>
          {/* {isHovered ? null : (
            <ProjectCaption title={name} subtitle={description} />
          )} */}
        </figure>
      )}
    />
  )
}
export default ProjectCover
