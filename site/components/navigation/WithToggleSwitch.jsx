import { Fragment, useState } from 'react'
export const WithToggleSwitch = props => {
  const [toggled, setToggled] = useState(false)
  function handleToggle(e) {
    setToggled(!toggled)
  }
  return <Fragment>{props.render(toggled, handleToggle)}</Fragment>
}
