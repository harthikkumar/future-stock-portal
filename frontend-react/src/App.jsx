import { useState } from 'react'
import './assets/css/style.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Main from './assets/components/Main'
import Register from './assets/components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/components/Login'
import { AuthProvider } from './authProvider';



function App() {
 

  return (
    <>
      <AuthProvider>
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App


