import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)