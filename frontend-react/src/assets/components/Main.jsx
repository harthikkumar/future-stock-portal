import React from 'react'
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";


const Main = () => {
  return (
    <>
    <Header/>
    <div className="container">
        <div className="p-5 text-center bg-light-dark rounded ">

        <h1 className='text-light'>future stock portal</h1>
        <p className='text-light'>A stock portal provides real-time market data, investment tools, news, analytics, and trading access for investors to manage portfolios efficiently.</p>
        <Button text='explore now' class='btn-warning'/>
        </div>
      <Footer/>
    </div>
    
    
    </>
  )
}

export default Main