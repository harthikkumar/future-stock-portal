import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { AuthContext } from '../../authProvider'
import {useNavigate} from 'react-router-dom'



const Header = () => {
  const {isloggedin, setIsloggedin} = useContext(AuthContext)
  const navigate = useNavigate();



  const handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsloggedin(false)
    console.log('logged out')
    navigate('/login')
  }


  const showdash  = ()=> {
      navigate('/dashboard');
  } 
  return (
    <>
        <nav className="navbar container pt-3 pb-3 align-item-center">
         <a className='navbar-brand text-light' href="">future stock portal</a>





         <div>
            { isloggedin ? (
              <>
              <button className='btn btn-danger' onClick={handleLogout}>logout</button>
              &nbsp;
              <button  className='btn btn-info' onClick={showdash}>Dashboard</button>
              </>
            ):(
              <>
              <Button text='login' class ='btn-info'/>
            &nbsp;&nbsp;&nbsp;
            <Button text='register' class= 'btn-outline-info'/>
                </>
            )}
         </div>
        </nav>
    
    </>
  )
}


export default Header  