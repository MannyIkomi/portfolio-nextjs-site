/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { typography } from "../styles"
import { formatDate } from "../util/dates"

export const TimeFrame = ({ start, end, styles, ...props }) => {
  const getMonthYear = date =>
    formatDate({ month: "long", year: "numeric" }, date)
  return (
    <span
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
