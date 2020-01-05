import React from "react"
export const Debug = props => (
  <pre style={{ overflowX: "scroll" }}>
    DEBUG
    {JSON.stringify(props, null, 2)}
  </pre>
)
export default Debug
