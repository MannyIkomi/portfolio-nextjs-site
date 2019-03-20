import React, { Component } from 'react'

import { convertEpochToDate } from '../../util/dates.js'
import '../../sass/projects.scss'
import _ from 'lodash'

const HoverProject = props => {
  const { title, subtitle } = props
  return (
    <div className="project hover">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  )
}

// const handleHover = (e, bool = false) => {
//   console.log(e)
//   console.log('onMouseEnter')
//   return true
// }

const ProjectPreview = props => {
  const selectCoverSize = 'original'
  const menuPath = 'portfolio'
  const cssClassRoot = 'project'

  const { name, covers, published_on: epoch, id, description } = props.project
  // refactor project preview to stateful component to manage <HoverProject />
  return (
    <figure className="project preview">
      <a href={`${menuPath}/${_.kebabCase(name)}`} className="link">
        <img className="cover" src={covers[selectCoverSize]} alt={name} />

        <HoverProject title={name} subtitle={'subtitle description text'} />
      </a>
    </figure>
  )
}

export default ProjectPreview
