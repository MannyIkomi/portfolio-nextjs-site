import { useState } from 'react'

export const useToggleSwitch = (defaultValue = false) => {
  const [toggled, setToggled] = useState(defaultValue)

  function handleToggle(e) {
    setToggled(!toggled)
  }

  return [toggled, handleToggle]
}

export default useToggleSwitch
