import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth.jsx'
import Admin from './Admin.jsx'
import Dashboard from './Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
