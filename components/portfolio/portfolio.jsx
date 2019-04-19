import React, { Component } from 'react'
import { ProjectCover, WithHoverState } from './projectCover'

const Portfolio = props => {
  const { id } = props
  return (
    <section className="portfolio" id={id}>
      {props.children}
    </section>
  )
}

export default Portfolio
