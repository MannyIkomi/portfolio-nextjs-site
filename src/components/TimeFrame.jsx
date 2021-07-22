/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"

import { typography } from "../styles"
import { getMonthYear } from "../util/dates"

export const TimeFrame = ({ start, end, styles, ...props }) => {
  return (
    <span // change to datetime elemen
      css={{
        fontFamily: typography.sans,
        fontSize: "0.9rem",
        fontStyle: "italic",
        ...styles,
      }}
    >
      {getMonthYear(start)} — {end ? getMonthYear(end) : "Present"}
    </span>
  )
}
