import { useState } from "react"

export const useToggleSwitch = (defaultValue = false) => {
  const [isToggled, setToggle] = useState(defaultValue)

  function handleToggle(e) {
    console.log("TOGGLE HANDLER:", e)
    setToggle(!isToggled)
  }

  return [isToggled, handleToggle]
}

export default useToggleSwitch
