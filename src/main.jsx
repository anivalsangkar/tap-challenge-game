import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactGA from 'react-ga4'


ReactGA.initialize('G-TDLDQDZRSR'); // ✅ your actual ID
ReactGA.send({ hitType: "pageview", page: window.location.pathname });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
