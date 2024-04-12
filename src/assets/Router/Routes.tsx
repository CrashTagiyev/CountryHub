
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../App'
import { Country } from '../../components/Country'
import Header from '../../components/Header'

export const pageRoutes = createBrowserRouter([
  {
    path: `/`,
    element: <App />
  },
  {
    path: `/countries/:name`,
    element: <>
      <Header setIndependent={() => { }} setSortByRegion={() => { }} setSearch={() => { }} setSort={()=>{}}/>
      <Country />
    </>
  },
])
