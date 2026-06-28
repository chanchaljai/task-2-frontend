import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "@tanstack/react-router";
import { router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </QueryClientProvider>
)
