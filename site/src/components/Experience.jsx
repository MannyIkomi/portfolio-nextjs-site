/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { typography, positionSticky, colors, flex } from "../styles"
import { Markdown } from "./markdown"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { TimeFrame } from "./TimeFrame"
import { Entity } from "./Entity"
import { ContentArea } from "./ContentArea"

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
    <article
      css={{ position: "relative", ...flex("column"), alignItems: "center" }}
      {...rest}
    >
      <header
        css={{
          ...positionSticky(),
          width: "100%",
          background: colors.muteGray,
          padding: "0.5rem 0",
          borderBottom: `0.1rem solid ${colors.darkGray20}`,
        }}
      >
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
