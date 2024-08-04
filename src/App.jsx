import React from 'react'

// import { ModeToggle } from './components/mode-toggle'
// import GridPattern from './components/magicui/animated-grid-pattern'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Web/Home'
import Notfound from './pages/Web/Notfound'
import Register from './pages/Web/Register'
import Login from './pages/Web/Login'
import Weblayout from './layout/Weblayout'


export const App = () => {
  return (
    <>
    {/* <div className='h-screen w-screen flex items-center justify-center font-bold'>
    <GridPattern/>
    <ModeToggle/>
    </div> */}
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<Notfound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
