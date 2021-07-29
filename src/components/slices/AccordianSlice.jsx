/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import {
  flex,
  maxTypeWidth,
  TOUCH_TARGET,
  CODE_TYPE,
  colors,
  onTabletMedia,
} from "../../styles"
import { switchRichContentToComponent } from "./RichContentSlice"

export const Accordian = ({ accordion_details, accordion_summary }) => {
  return (
    <details
      css={{
        margin: "1rem 0",
        padding: "0.75rem",
        width: "100%",
        border: `0.25rem solid ${colors.TURQUOISE}`,

        "summary::marker": {
          ...CODE_TYPE,
          display: "block",
          color: colors.ACCENT,
          content: `"=> "`,
        },
        "&[open]": {
          "summary::marker": {
            display: "block",
            ...CODE_TYPE,
            color: colors.ACCENT,
            content: `":: "`,
          },
        },
      }}
    >
      <summary
        css={{
          minHeight: TOUCH_TARGET,
          padding: "1rem 0",
        }}
      >
        {accordion_summary}
      </summary>
      {accordion_details.map(switchRichContentToComponent)}
    </details>
  )
}

export const AccordianSlice = props => {
  const { primary, items } = props
  return (
    <section
      css={[
        { padding: "0 1rem", width: "100%", ...maxTypeWidth },
        onTabletMedia({
          padding: 0,
        }),
      ]}
    >
      {/* <code css={{ background: "red" }}>{JSON.stringify(props, null, 2)}</code> */}
      {primary.accordion_section_title.map(switchRichContentToComponent)}
      {items.map(accordian => (
        <Accordian {...accordian} />
      ))}
    </section>
  )
}

export default AccordianSlice
