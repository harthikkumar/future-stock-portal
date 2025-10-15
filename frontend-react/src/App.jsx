import { useState } from 'react'
import './assets/css/style.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Main from './assets/components/Main'
import Register from './assets/components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 

  return (
    <>

     <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </BrowserRouter>
     
    </>
  )
}

export default App


