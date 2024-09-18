import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useRandomProfileData from './hooks/randomUsers'
import NavBar from './components/Header/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import RandomUser from './pages/RandomUser'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default App
