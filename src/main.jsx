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
import PixelrartTopNav from './components/Pixelrart-Top-Nav.jsx'
import Profile from './pages/shared/Profile.jsx'
import SinglePost from './pages/shared/Post-Detail.jsx'

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
    path: '/m',
    element: <PixelrartTopNav />,
    children: [
      {
        path: '/m/pixelrart',
        element: <PixelrArtMainPage />,
        children: [
          {
            path: '/m/pixelrart',
            element: <Pixelrart />,
          },
          {
            path: '/m/pixelrart/foryou',
            element: <AllPosts />,
          },
          {
            path: '/m/pixelrart/create',
            element: <CreatePost />,
          },
          {
            path: '/m/pixelrart/trending',
            element: <TrendingPosts />,
          },
          {
            path: '/m/pixelrart/posts/:ID',
            element: <SinglePost />,
          },
        ],
      },
      {
        path: '/m/profile',
        element: <Profile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
