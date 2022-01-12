/* eslint-disable no-unused-vars */
import React from 'react'
import { useDebouncedChange } from './useDebounce'

export const Searchinput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = React.useState(value)//value is the value of the input field
  const debouchedChange = useDebouncedChange(onChange, 500)//onChange is the function that will be called when the input field changes


  function handleChange(event) {
    setDisplayValue(event.target.value)
    debouchedChange(event.target.value)
  }


  return (
    <div className="search-input-container">
      <input
        type="search"
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  )
}