import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx'

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
    
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    
    </QueryClientProvider>
    </AuthProviders>
    
    
  </React.StrictMode>,
)
