import React, { useState, useEffect } from 'react'

const UseStateApp = () => {
  const [emotion, setEmotion] = useState('happy')
  const [secondary, setSecondary] = useState('tired')
  useEffect(() => {
    console.log(`It's ${emotion} around here`)
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])

  return (
    <div>
      <h1>
        Current emotion is {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion('frustrated')}>Frustrated</button>
      <button onClick={() => setEmotion('enthusiastic')}>Enthusiastic</button>
      <button onClick={() => setEmotion('happy')}>Happy</button>
      <button onClick={() => setSecondary('crabby')}>Crabby</button>
    </div>
  )
}

export default UseStateApp
