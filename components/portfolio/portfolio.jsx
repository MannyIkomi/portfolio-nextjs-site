import React, { Component } from 'react'
import { ProjectCover, WithHoverState } from './projectPreview.jsx'

const Portfolio = props => {
  const { id } = props
  return (
    <section className="gallery" id={id}>
      {props.children}
    </section>
  )
}

export default Portfolio
