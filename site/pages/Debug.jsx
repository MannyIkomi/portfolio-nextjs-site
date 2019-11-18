import React from 'react'

export const Debug = ({ ...props }) => (
  <pre style={{ overflowX: 'scroll', maxWidth: '100%' }}>
    {JSON.stringify(props, null, 3)}
  </pre>
)

export default Debug
