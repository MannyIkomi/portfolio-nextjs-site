/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { TypesetLink } from "./TypesetLink"
import Markdown from "./markdown"
import { colors, typography } from "../styles"
import { inspirationProps } from "../util/props"

export const CreativeInspiration = props => {
  const { photo, name, description, website, children } = props

  const styles = css({
    margin: "2rem 0",
    padding: "0 1rem",
    color: colors.darkGray,
    "h1, h2, h3, h4, h5": {
      fontFamily: typography.sans,
      fontWeight: "bold",
      textTransform: "initial",
    },
  })

  return (
    <figure css={[styles]}>
      {photo && (
        <img
          css={{ display: "block", width: "100%", height: "auto" }}
          src={photo.publicURL}
          alt={name}
        />
      )}
      {website ? (
        <TypesetLink to={website}>
          <h2>{name}</h2>
        </TypesetLink>
      ) : (
        <h2>{name}</h2>
      )}
      <figcaption>
        <Markdown>{description}</Markdown>
        {children}
      </figcaption>
    </figure>
  )
}

CreativeInspiration.propTypes = inspirationProps

export default CreativeInspiration
