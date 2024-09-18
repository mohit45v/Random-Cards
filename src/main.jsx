import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RandomUser from './pages/RandomUser.jsx'
import { CatListing } from './pages/catListing.jsx'
import RandomJokes from './pages/RandomJokes.jsx'
import NavBar from './components/Header/NavBar.jsx'



const routerr = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RandomUser />
      },
      // {
      //   path: '/RandomUser',
      //   element: <RandomUser />
      // },
      {
        path: '/RandomJokes',
        element: <RandomJokes />
      },
      {
        path: '/CatListing',
        element: <CatListing />
      }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerr}/>
  </StrictMode>,
)
