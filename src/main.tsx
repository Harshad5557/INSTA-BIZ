import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/home.css'
import './styles/catalog.css'
import './styles/information.css'
import './styles/contact.css'
import './styles/cursor.css'
import './styles/page-curtain.css'
import './styles/puppy-trail.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
