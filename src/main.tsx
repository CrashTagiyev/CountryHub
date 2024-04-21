import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import { setupStore } from './Store/store'
import { pageRoutes } from './Router/Routes'
import { RouterProvider } from 'react-router-dom'

const store=setupStore()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={pageRoutes}/>
    </Provider>
  </React.StrictMode>,
)
