/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"

import {
  colors,
  positionSticky,
  typography,
  TOUCH_TARGET,
  MENUBAR_HEIGHT,
} from "../styles"
import { getMonthYear } from "../util/dates"
import { ResumeTitle } from "./ResumeTitle"
import { TimeFrame } from "./TimeFrame"
import Markdown from "./Markdown"
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
    <section css={{ margin: `${TOUCH_TARGET} 0` }} {...restProps}>
      <div
        css={[
          toggled && positionSticky(MENUBAR_HEIGHT),
          {
            width: "100%",
            background: colors.LIGHT_GRAY,
            padding: "0.5rem 0",
            borderTop: `0.1rem solid ${colors.TURQUOISE}`,
          },
        ]}
      >
        <ResumeTitle>{concentration}</ResumeTitle>
        {school}
        <br />
        {ended ? (
          <span
            css={{
              fontFamily: typography.SANS_TYPE,
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Awarded {getMonthYear(ended)}
          </span>
        ) : (
          <span
            css={{
              fontFamily: typography.SANS_TYPE,
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            In Progress…
          </span>
        )}
      </div>
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
    </section>
  )
}
