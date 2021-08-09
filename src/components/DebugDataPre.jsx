import { jsx } from "@emotion/react"

export function DebugDataPre(props) {
  return (
    <pre css={{ background: "red" }}>
      {JSON.stringify(props.children || props, null, 2)}
    </pre>
  )
}
