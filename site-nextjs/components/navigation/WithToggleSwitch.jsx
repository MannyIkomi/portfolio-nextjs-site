import { Fragment, useState } from 'react'

export const WithToggleSwitch = ({ render, children, ...props }) => {
  const [toggled, setToggled] = useState(false)

  function handleToggle(e) {
    setToggled(!toggled)
  }
  return <Fragment>{render(toggled, handleToggle)}</Fragment>
}
