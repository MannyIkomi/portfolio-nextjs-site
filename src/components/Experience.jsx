/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"

import {
  typography,
  positionSticky,
  colors,
  flex,
  TOUCH_TARGET,
  MENUBAR_HEIGHT,
  onDesktopMedia,
} from "../styles"
import { Markdown } from "./Markdown"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { TimeFrame } from "./TimeFrame"
import { ResumeTitle } from "./ResumeTitle"

import StickyScrollContainer from "./StickyScrollContainer"
import { Button } from "./Button"

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
    <StickyScrollContainer>
      <section
        css={{
          ...flex("column"),
          alignItems: "center",
          margin: `${TOUCH_TARGET} 0`,
        }}
        {...rest}
      >
        <div
          css={[
            toggled && positionSticky(MENUBAR_HEIGHT),
            {
              width: "100%",
              background: colors.LIGHT_GRAY,
              padding: "0.5rem 0",
              borderTop: `0.1rem solid ${colors.TURQUOISE}`,
            },
            // onDesktopMedia({
            //   ...positionSticky(-1),
            // }),
          ]}
        >
          <ResumeTitle url={url}>{organization}</ResumeTitle>
          <br />
          {roles}
          <br />
          <TimeFrame
            styles={{
              fontFamily: typography.SANS_TYPE,
              fontStyle: "italic",
            }}
            start={started}
            end={ended}
          />
        </div>
        {summary && (
          <>
            <Markdown>{summary}</Markdown>
          </>
        )}

        {details && toggled && (
          <>
            <Markdown>{details}</Markdown>
          </>
        )}
        {details && (
          <Button
            onClick={() => (toggled ? setToggle(false) : setToggle(true))}
          >
            {toggled ? `Close ${organization}` : `More on ${organization}…`}
          </Button>
        )}
      </section>
    </StickyScrollContainer>
  )
}
