import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataLayer } from './Datalayer.jsx'
import reducer , {initialstate} from './reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initialstate={initialstate} reducer={reducer} >
   
    <App />
    </DataLayer>
  </React.StrictMode>
)
