import React, { Component, Fragment } from 'react'

import { convertEpochToDate } from '../../util/dates.js'
import '../../sass/projects.scss'
import { kebabCase } from 'lodash'

const ProjectHover = props => {
  const { title, subtitle } = props
  return (
    <div className="project hover">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
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
  const menuPath = 'projects'
  const cssClassRoot = 'project'

  const { name, covers, published_on: epoch, id, description } = props.project
  // refactor project preview to stateful component to manage <HoverProject />
  return (
    <figure
      className="project preview"
      onMouseEnter={props.handleMouseEnter}
      onMouseLeave={props.handleMouseLeave}
    >
      <a href={`${menuPath}/${kebabCase(name)}`} className="link">
        <CoverImg src={covers[selectCoverSize]} alt={name} />

        {props.isHovered ? (
          <ProjectHover title={name} subtitle={'subtitle description text'} />
        ) : null}
      </a>
    </figure>
  )
}

export { ProjectPreview, WithHoverState }
