import React, { Component } from 'react'
import { convertEpochToDate } from '../../util/dates.js'

const ProjectPreview = props => {
  const selectCoverSize = 'original'
  const menuPath = '/portfolio'
  const cssClassRoot = 'project'

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

export default ProjectPreview
