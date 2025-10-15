import {Children, useContext} from 'react'
import { AuthContext } from './authProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = () => {
    const {isloggedin} = useContext(AuthContext)
  return !isloggedin?(
    Children
  ):(
    <Navigate to='/dashboard'/>
  )
}

export default PublicRoute