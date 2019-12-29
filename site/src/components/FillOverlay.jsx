import React from "react"
export const FillOverlay = ({ children, ...props }) => (
  <React.Fragment>
    <div>
      <div>fill motif</div>
      {children}
    </div>
  </React.Fragment>
)
