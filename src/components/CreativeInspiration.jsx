/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { TypesetLink } from "./TypesetLink"
import Markdown from "./markdown"
import { colors, typography, SANS_HEADING, maxLineMeasure } from "../styles"

export const CreativeInspiration = props => {
  const { photo, name, description, website, children } = props
  const imageProps =
    photo && photo.childImageSharp ? photo.childImageSharp.fluid : photo // for fallback GIF support

  const PortraitPhoto = props => (
    <img
      css={{ display: "block", width: "66%", height: "auto" }}
      alt={name}
      {...imageProps}
    />
  )

  return (
    <figure
      css={{
        ...maxLineMeasure,
        margin: "2rem 0",
        padding: "0 1rem",
        color: colors.darkGray,
        "h1, h2, h3, h4, h5": {
          ...SANS_HEADING,
          textTransform: "initial",
        },
      }}
    >
      {photo &&
        (website ? (
          <a href={website}>
            <PortraitPhoto />
          </a>
        ) : (
          <PortraitPhoto />
        ))}

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

export default CreativeInspiration
