/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { colors, positionSticky, resumeContentHeading } from "../styles"
import { Entity } from "./Entity"
import { TimeFrame } from "./TimeFrame"
import Markdown from "./markdown"
import useToggleSwitch from "../hooks/useToggleSwitch"

export const Education = props => {
  const {
    school,
    started,
    ended,
    description,
    concentration,
    details,
    ...rest
  } = props
  const [toggled, setToggled] = useToggleSwitch(false)
  return (
    <article>
      <header
        css={{
          ...positionSticky(),
          width: "100%",
          background: colors.muteGray,
          padding: "0.5rem 0",
          borderBottom: `0.1rem solid ${colors.darkGray20}`,
        }}
      >
        <Entity>{school}</Entity>
        {concentration}
        <br />
        <TimeFrame start={started} end={ended} />
      </header>
      {description && <Markdown>{description}</Markdown>}

      {details && (
        <button
          onClick={() => (toggled ? setToggled(false) : setToggled(true))}
        >
          {toggled ? "Close" : <>{`More on ${school}…`}</>}
        </button>
      )}
    </article>
  )
}
