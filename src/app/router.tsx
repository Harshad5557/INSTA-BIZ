import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { GoneHomePage } from '../pages/GoneHomePage'
import { PuppiesPage } from '../pages/PuppiesPage'
import { PuppyDetailPage } from '../pages/PuppyDetailPage'
import { HowItWorksPage } from '../pages/HowItWorksPage'
import { FAQPage } from '../pages/FAQPage'
import { HappyFamiliesPage } from '../pages/HappyFamiliesPage'
import { ContactPage } from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'puppies', element: <PuppiesPage /> },
      { path: 'puppies/:slug', element: <PuppyDetailPage /> },
      { path: 'gone-home', element: <GoneHomePage /> },
      { path: 'happy-families', element: <HappyFamiliesPage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])