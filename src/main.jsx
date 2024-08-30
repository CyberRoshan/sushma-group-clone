import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import OurOffering from './components/OurOffering.jsx'
import SuccessStory from './components/SuccessStory.jsx'
import ServicePartner from './components/ServicePartner.jsx'
import Faq from './components/Faq.jsx'
import Footer from './common/Footer.jsx'

const route=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/our-projects",
    element:<OurOffering/>
  },
  {
    path:"/our-succes-story",
    element:<SuccessStory/>
  },
  {
    path:"/media",
    element:"/"
  },
  {
    path:"/sushma-service-partner",
    element:<ServicePartner/>
  },
  {
    path:"/faq",
    element:<Faq/>
  },
  {
    path:"/contact-us",
    element:<Footer/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
