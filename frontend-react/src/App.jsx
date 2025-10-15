import { useState } from 'react'
import './assets/css/style.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Main from './assets/components/Main'
import Register from './assets/components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/components/Login'
import { AuthProvider } from './authProvider';
import Dashboard from './assets/components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
function App() {
 

  return (
    <>
      <AuthProvider>
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
      
    </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App


