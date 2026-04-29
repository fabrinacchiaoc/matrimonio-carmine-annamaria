import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Scherzo from './Scherzo.jsx'
import './index.css'

const hash = window.location.hash.replace('#', '').toLowerCase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {hash === 'scherzo' ? <Scherzo /> : <App />}
  </React.StrictMode>,
)
