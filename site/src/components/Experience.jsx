/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { typography } from "../styles"
import { Markdown } from "./markdown"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { TimeFrame } from "./TimeFrame"
import { Entity } from "./Entity"

export const Experience = props => {
  const {
    url,
    organization,
    roles,
    summary,
    details,
    started,
    ended,
    ...rest
  } = props
  const [toggled, setToggle] = useToggleSwitch(false)
  return (
    <article {...rest}>
      <header>
        <Entity url={url}>{organization}</Entity>
        <br />
        {roles}
        <br />
        <TimeFrame
          styles={{
            fontFamily: typography.sans,
            fontStyle: "italic",
          }}
          start={started}
          end={ended}
        />
      </header>
      {summary && <Markdown>{summary}</Markdown>}

      {details && toggled && (
        <>
          <Markdown>{details}</Markdown>
        </>
      )}
      {details && (
        <button onClick={() => (toggled ? setToggle(false) : setToggle(true))}>
          {toggled ? "Close" : `More on ${organization}…`}
        </button>
      )}
    </article>
  )
}
