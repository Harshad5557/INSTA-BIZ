import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { GoneHomePage } from '../pages/GoneHomePage'
import { PuppiesPage } from '../pages/PuppiesPage'
import { PuppyDetailPage } from '../pages/PuppyDetailPage'
import { ReferencePage } from '../pages/ReferencePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'puppies', element: <PuppiesPage /> },
      { path: 'puppies/:slug', element: <PuppyDetailPage /> },
      { path: 'gone-home', element: <GoneHomePage /> },
      {
        path: 'happy-families',
        element: (
          <ReferencePage
            title="Happy families"
            description="Moments shared by families who welcomed a Teddy Pup."
          />
        ),
      },
      {
        path: 'how-it-works',
        element: (
          <ReferencePage
            title="How it works"
            description="A clear, caring path from finding your puppy to welcoming them home."
          />
        ),
      },
      {
        path: 'faq',
        element: (
          <ReferencePage
            title="Questions & answers"
            description="Answers to the questions families ask most."
          />
        ),
      },
      {
        path: 'contact',
        element: (
          <ReferencePage
            title="Visit & contact"
            description="Have a question? The TeddyPups team would love to hear from you."
          />
        ),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])