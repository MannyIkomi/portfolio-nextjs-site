import { useState } from "react"
export const useHoverState = (init = false) => {
  const [isHovered, setIsHovered] = useState(init)
  const handleHover = e => {
    setIsHovered(!isHovered)
  }
  return [isHovered, handleHover]
}
