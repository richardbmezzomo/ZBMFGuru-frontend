import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Forecast from './pages/Forecast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Forecast/>
  </StrictMode>,
)
