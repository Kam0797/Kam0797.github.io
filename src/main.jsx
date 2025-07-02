import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhyThisGuy from './WhyThisGuy.jsx'
import Stats from './Stats.jsx'
import Pro1 from './Pro1.jsx'
import Pro2 from './Pro2.jsx'
import Pro3 from './Pro3.jsx'
import Pro4 from './Pro4.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div class='bodfather'>
    <App />
    <WhyThisGuy />
    <Stats />
    <Pro1 /> 
    <Pro2 /> 
    <Pro3 /> 



  </div>
  </StrictMode>
)
