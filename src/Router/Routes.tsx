
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Country } from '../components/Country'

export const pageRoutes = createBrowserRouter([
  {
    path: `/`,
    element: <App />
  },
  {
    path: `/countries/:name`,
    element: <>
      <Country />
    </>
  },
])
