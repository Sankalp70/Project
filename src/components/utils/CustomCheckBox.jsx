import React from 'react'
import checkboxStyles from './Checkbox.module.css'

const CheckBox = () => {
  return (
    <div>
      <label className={checkboxStyles.container}>
    <input type="checkbox" defaultChecked="" />
    <span className={checkboxStyles.checkmark} />
  </label>
  </div>
  )
}

export default CheckBox;