import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store, { Persistor } from './store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import PixelrArtMainPage from './pages/Pixelrart-main.jsx'
import AllPosts from './pages/shared/Posts.jsx'
import CreatePost from './pages/shared/Create-Post.jsx'
import TrendingPosts from './pages/shared/Trending-Posts.jsx'
import Pixelrart from './pages/shared/Pixelrart.jsx'
import PixelrartTopNav from './components/Pixelrart-Top-Nav.jsx'
import Profile from './pages/shared/Profile.jsx'
import SinglePost from './pages/shared/Post-Detail.jsx'
import TopListArtists from './pages/shared/Top-List-Artists.jsx'
import SignUp from './pages/Sign-up.jsx'
import SignIn from './pages/Sign-in.jsx'
import ForgotPassword from './pages/Forgot-password.jsx'
import PasswordEmailMessage from './pages/Password-reset-inst.jsx'

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
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/auth/signin',
    element: <SignIn />,
  },
  {
    path: '/auth/reset-instructions',
    element: <PasswordEmailMessage />,
  },
  {
    path: '/auth/password-reset',
    element: <ForgotPassword />,
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
            path: '/m/pixelrart/artists',
            element: <TopListArtists />,
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
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
