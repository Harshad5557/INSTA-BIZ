import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ReferencePage } from '../pages/ReferencePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'puppies',
        element: (
          <ReferencePage
            title="Available puppies"
            description="Meet puppies ready to find their families."
          />
        ),
      },
      {
        path: 'puppies/:slug',
        element: (
          <ReferencePage
            title="Puppy details"
            description="Get to know this puppy and the next steps for welcoming them home."
          />
        ),
      },
      {
        path: 'gone-home',
        element: (
          <ReferencePage
            title="Gone home"
            description="Every puppy here has already joined a loving family."
          />
        ),
      },
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