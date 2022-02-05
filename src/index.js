import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ConditionalApp from './ConditionalApp'
import UseStateApp from './UseStateApp'
import UseReducer from './UseReducer'
import FetchingData from './FetchingData'

ReactDOM.render(
  <FetchingData login={'sevrinn'} />,
  document.getElementById('root')
)
