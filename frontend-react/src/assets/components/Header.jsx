import React from 'react'
import Button from './Button'

export const Header = () => {
  return (
    <>
        <nav className="navbar container pt-3 pb-3 align-item-center">
         <a className='navbar-brand text-light' href="">future stock portal</a>

         <div>
            <Button text='login' class ='btn-info'/>
            &nbsp;&nbsp;&nbsp;
            <Button text='register' class= 'btn-outline-info'/>

         </div>
        </nav>
    
    </>
  )
}
