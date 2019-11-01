import { Fragment, useState } from 'react'
export const WithHoverState = props => {
  const [isHovered, setIsHovered] = useState(false)
  const { render } = props
  function handleMouseEnter(e) {
    // console.log(e)
    setIsHovered(true)
  }
  function handleMouseLeave(e) {
    // console.log(e)
    setIsHovered(false)
  }
  return (
    <Fragment>{render(isHovered, handleMouseEnter, handleMouseLeave)}</Fragment>
  )
}
