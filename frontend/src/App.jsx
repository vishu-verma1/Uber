import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignup/> } />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
    </Routes>
    </>
  )
}

export default App
