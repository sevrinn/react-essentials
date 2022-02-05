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
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img src={data.avatar_url} alt={data.login} />
      </div>
    )
  }
  return <div>No User Available</div>
}

export default FetchingData
