import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ConditionalApp from './ConditionalApp'

ReactDOM.render(
  <ConditionalApp authorized={true} />,
  document.getElementById('root')
)
