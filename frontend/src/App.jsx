import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWraper from './pages/UserProtectWraper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/riding' element={<UserProtectWraper><Riding /></UserProtectWraper>} />
        <Route path='/captain-riding' element={<UserProtectWraper><CaptainRiding/></UserProtectWraper>} />
        
        <Route path='/home' element={<UserProtectWraper>
          <Home />
        </UserProtectWraper>} />

        <Route path='/user/logout' element={<UserProtectWraper>
          <UserLogout />
        </UserProtectWraper>} />

        <Route path='/captain-home' element={<UserProtectWraper>
          <CaptainHome />
        </UserProtectWraper>} />


      </Routes>
    </>
  )
}

export default App
