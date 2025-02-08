import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

let queryClient = new QueryClient();

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools/>
    </BrowserRouter>
  </QueryClientProvider>
);
