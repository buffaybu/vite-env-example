import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { logEnv } from "./logEnv";

import Worker from "./worker?worker";
new Worker();

logEnv();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
