/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import PropTypes from "prop-types"
import { colors } from "../styles"
import { ReactSVG } from "react-svg"

export const Logo = ({ lockup = "master", color, fill, stroke, ...props }) => {
  const getLockup = lockup => {
    switch (lockup) {
      case "type":
        return <ReactSVG src="static/logo-turqouise-blue.svg" />

      case "master":
        return <ReactSVG src="static/logo-yellow-blue.svg" />
    }
  }

  return (
    <a
      href={`/`}
      css={{
        display: "block",
        svg: { width: "100%", height: "auto" },
      }}
      {...props}
    >
      {getLockup(lockup)}
    </a>
  )
}

export const LogoType = props => <Logo lockup={`type`} {...props} />
export const LogoMaster = props => <Logo lockup={`master`} {...props} />

export default Logo
