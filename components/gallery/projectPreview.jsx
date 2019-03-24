import React, { Component, Fragment } from 'react'

import { convertEpochToDate } from '../../util/dates.js'
import '../../sass/projects.scss'
import { kebabCase } from 'lodash'

const FillOverlay = props => {
  return <div className="overlay">{props.children}</div>
}

const ProjectCaption = props => {
  const { title, subtitle } = props
  return (
    <figcaption>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </figcaption>
  )
}

class WithHoverState extends Component {
  state = { isHovered: false }

  handleOnMouseEnter = e => {
    // console.log(e)
    this.setState({ isHovered: true })
  }
  handleMouseLeave = e => {
    // console.log(e)
    this.setState({ isHovered: false })
  }

  render() {
    const { render } = this.props
    const { isHovered } = this.state
    return (
      <Fragment>
        {render(isHovered, this.handleOnMouseEnter, this.handleMouseLeave)}
      </Fragment>
    )
  }
}

const CoverImg = ({ src, alt }) => <img className="cover" src={src} alt={alt} />

const ProjectPreview = props => {
  const selectCoverSize = 'original'
  const linkPath = 'projects'

  const { handleMouseEnter, handleMouseLeave } = props
  const { name, covers, published_on: epoch, id, description } = props.project

  return (
    <WithHoverState
      render={(isHovered, handleMouseEnter, handleMouseLeave) => (
        <figure
          className="project preview "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={`${linkPath}/${kebabCase(name)}`}
            className="aspect link"
            id={kebabCase(name)}
          >
            <CoverImg src={covers[selectCoverSize]} alt={name} />

            {isHovered ? (
              <FillOverlay>
                <ProjectCaption
                  title={name}
                  subtitle={'subtitle description text'}
                />
              </FillOverlay>
            ) : null}
          </a>
        </figure>
      )}
    />
  )
}

export { ProjectPreview, WithHoverState }
