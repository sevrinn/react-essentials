import React, { useState, useEffect } from 'react'

//https://api.github.com/users/sevrinn

const FetchingData = ({ login }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
  }, [])

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }
  return <div>No User Available</div>
}

export default FetchingData
