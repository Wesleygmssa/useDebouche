import React, { useRef } from 'react'

// export function useDebouncedChange(fn, delay) { //callback is the function that will be called when the input field changes
//   const [timeout, setTimeout] = React.useState(null) //timeout is the timeout id

//   return function (...args) { //args is the arguments passed to the function
//     clearTimeout(timeout) //clear the timeout
//     setTimeout(() => fn(...args), delay) //set the timeout
//   }
// }

export function useDebouncedChange(fn, delay) {
  const timeout = useRef(null);

  function debouncedFn(...args) {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => fn(...args), delay)

  }
  return debouncedFn

}