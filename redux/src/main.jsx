import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider as ReduxProvide } from 'react-redux'
import store from './store/index.js'
import { BrowserRouter } from 'react-router-dom'

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvide store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvide>
)
