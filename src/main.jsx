import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import PixelrArtMainPage from './pages/Pixelrart-main.jsx'
import AllPosts from './components/Posts.jsx'
import CreatePost from './pages/shared/Create-Post.jsx'
import TrendingPosts from './pages/shared/Trending-Posts.jsx'
import Pixelrart from './pages/shared/Pixelrart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/pixelrart',
    element: <PixelrArtMainPage />,
    children: [
      {
        path: '/pixelrart',
        element: <Pixelrart />,
      },
      {
        path: '/pixelrart/foryou',
        element: <AllPosts />,
      },
      {
        path: '/pixelrart/create',
        element: <CreatePost />,
      },
      {
        path: '/pixelrart/trending',
        element: <TrendingPosts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
