import React, { useState } from 'react'

const UseStateApp = () => {
  const [emotion, setEmotion] = useState('happy')
  return (
    <div>
      <h1>Current emotion is {emotion}.</h1>
    </div>
  )
}

export default UseStateApp
