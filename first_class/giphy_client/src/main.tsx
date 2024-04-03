import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Home from './pages/home/Home.tsx';
import ErrorPage from './pages/error/ErrorPage.tsx';
import App from './App.tsx';
import GifsTemplate from './pages/gifs/GifsTemplate.tsx';
import StickersTemplate from './pages/stickers/StickersTemplate.tsx';
import Create from './pages/create/Create.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "/gifs",
        element: <GifsTemplate />
      },
      {
        path: "/stickers",
        element: <StickersTemplate />
      },
      {
        path: "/create",
        element: <Create />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
