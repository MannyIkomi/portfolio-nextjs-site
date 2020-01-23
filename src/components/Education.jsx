/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import {
  colors,
  positionSticky,
  typography,
  touchTarget,
  resumeContentHeading,
  menubarHeight,
} from "../styles"
import { TitleResume } from "./Entity"
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
    ...restProps
  } = props
  const [toggled, setToggled] = useToggleSwitch(false)
  return (
    <article css={{ margin: `${touchTarget} 0` }} {...restProps}>
      <header
        css={[
          toggled && positionSticky(menubarHeight),
          {
            width: "100%",
            background: colors.muteGray,
            padding: "0.5rem 0",
            borderBottom: `0.1rem solid ${colors.darkGray20}`,
          },
        ]}
      >
        <TitleResume>{concentration}</TitleResume>
        {school}
        <br />
        <TimeFrame start={started} end={ended} />
      </header>
      {description && <Markdown>{description}</Markdown>}

      {details && (
        <button
          css={{
            fontFamily: typography.sans,
            fontSize: "1rem",
            backgroundColor: colors.darkGray20,
            color: colors.darkGray,
            // borderTop: `0.1rem solid ${colors.orange}`,
            borderBottom: `0.1rem solid ${colors.orange}`,
            padding: "0.5rem",
            // alignSelf: 'flex-end'
          }}
          onClick={() => (toggled ? setToggled(false) : setToggled(true))}
        >
          {toggled ? `Close ${school}` : <>{`More on ${school}…`}</>}
        </button>
      )}
    </article>
  )
}
