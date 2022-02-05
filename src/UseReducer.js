import React, { useReducer } from 'react'

const UseReducer = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false)

  return (
    <>
      <input type='checkbox' value={checked} onChange={toggle} />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </>
  )
}

export default UseReducer
