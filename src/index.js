import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
// import ConditionalApp from './ConditionalApp'
// import UseStateApp from './UseStateApp'
// import UseReducer from './UseReducer'
// import FetchingData from './FetchingData'
// import ReactTesting from './ReactTesting'
// import Checkbox from './Checkbox'
import RouterApp from './RouterApp'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <RouterApp />
  </Router>,

  document.getElementById('root')
)
