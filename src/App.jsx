import React  from 'react'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Service from './pages/Service'
import { AnimatePresence } from "framer-motion"
import About from './pages/About'
import Carousels from './components/Carousels'
import Homepage from './pages/Homepage'
const App = () => {
  const location = useLocation();
  return (
    <div className='body'>
      <Navbar/>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Services' element={<Service/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element= {<Contact/>} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App