// import axios from 'axios'
// import React, {useEffect} from 'react'
// import Header from '../Header'
// import Footer from '../Footer'
// import axiosInstance from '../../../axiosinstance'

// const Dashboard =  () => {
//     const accessToken = localStorage.getItem('access_token')
//     const fetchProtectedData = async()=> {
        
//         try{
//             const response = await axiosInstance.get('/protected-view/',{
//             //    headers : {
//             //     authorization:`Bearer ${accessToken}`
//             //    } 
//             })
//             console.log("success: ",response.data);
//         }catch(error){
// console.error('error fetching data', data)
//         }
//     }
//   return (
//     <>
//     <Header/>
//     <div className="text-light container">Dashboard</div>
//     <Footer/>
    
    
//     </>
//   )
// }

// export default Dashboard



import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axiosInstance from '../../../axiosinstance';

const Dashboard = () => {
  const fetchProtectedData = async () => {
    try {
      const response = await axiosInstance.get('/protected-view/');
      console.log("success: ", response.data);
    } catch (error) {
      console.error('error fetching data', error);
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, []);

  return (
    <>
      <Header />
      <div className="text-light container">Dashboard</div>
      <Footer />
    </>
  );
};

export default Dashboard;
