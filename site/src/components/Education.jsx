/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

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
      <header>
        <Entity>{school}</Entity>
        {concentration && (
          <>
            <br /> {concentration}
          </>
        )}
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
