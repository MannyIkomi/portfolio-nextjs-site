/** @jsx jsx */
import { jsx } from "@emotion/react"
import { RichText } from "prismic-reactjs"
import React from "react"
import {
  flex,
  maxTypeWidth,
  TOUCH_TARGET,
  CODE_TYPE,
  colors,
  onTabletMedia,
} from "../../styles"
import htmlSerializer from "./htmlSerializer"

export const Accordian = ({ accordion_details, accordion_summary }) => {
  return (
    <details
      css={{
        margin: "1rem 0",
        padding: "0.75rem",
        width: "100%",
        border: `0.25rem solid ${colors.TURQUOISE}`,

        color: colors.PRIMARY,

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
      <RichText
        render={accordion_details.raw}
        // serializeHyperlink={CustomLink}
        htmlSerializer={htmlSerializer}
      />
    </details>
  )
}

export const AccordianSlice = props => {
  const { primary, items } = props
  return (
    <section
      css={[
        {
          marginBottom: "3rem",
          padding: "0 1rem",
          width: "100%",
          color: colors.PRIMARY,
          ...maxTypeWidth,
        },
        onTabletMedia({
          padding: 0,
        }),
      ]}
    >
      {/* <code css={{ background: "red" }}>{JSON.stringify(props, null, 2)}</code> */}
      <RichText
        render={primary.accordion_section_title.raw}
        // serializeHyperlink={CustomLink}
        htmlSerializer={htmlSerializer}
      />

      {items.map(accordian => (
        <Accordian {...accordian} key={accordian.accordion_details.text} />
      ))}
    </section>
  )
}

export default AccordianSlice
