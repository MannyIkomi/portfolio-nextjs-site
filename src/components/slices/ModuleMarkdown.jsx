/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { Markdown } from "../Markdown"

import { css, jsx } from "@emotion/react"
import { colors } from "../../styles"

export const ModuleMarkdown = ({ children, ...props }) => {
  return (
    <Markdown
      css={{
        "h1, h2, h3, h4": {
          color: colors.PRIMARY,
          fontWeight: 700,
        },
        hangingPunctuation: "first last", // only supported in Safari :(
      }}
      {...props}
    >
      {children}
    </Markdown>
  )
}
ModuleMarkdown.propTypes = {
  children: PropTypes.any.isRequired,
  preprocessor: PropTypes.func,
}

export default ModuleMarkdown
