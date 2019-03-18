import React, { Component } from 'react'
import { convertEpochToDate } from '../../util/dates.js'

class ProjectPreview extends Component {
  selectCoverSize = 'original'

  menuPath = '/portfolio'
  cssClassRoot = 'project'

  createResourcePath = behanceSlug => {
    return '/' + behanceSlug
  }
  createHref = (path, behanceSlug) => path + behanceSlug

  projectLink = this.createHref(
    this.menuPath,
    this.createResourcePath(this.props.project.slug)
  ).toLowerCase()

  render() {
    const { name, covers, published_on: epoch, id } = this.props.project
    return (
      <figure className="project-preview" data-id={id}>
        <a href={this.projectLink} className="project-link">
          <img
            className="project-cover"
            src={covers[this.selectCoverSize]}
            alt={name}
          />

          <figcaption>
            <h1 className="project-title">{name}</h1>
            <p className="project-date">
              {convertEpochToDate(epoch).toDateString()}
            </p>
          </figcaption>
        </a>
      </figure>
    )
  }
}

export default ProjectPreview
