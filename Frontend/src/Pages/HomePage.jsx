import React from 'react'
import HomeScreen from '../containers/HomeScreen'
import AuthScreen from '../containers/AuthScreen'
import { useAuthStore } from '../store/authUser'

const HomePage = () => {
    const {user}=useAuthStore();
  return (
    <div className=' h-screen'>
      {user?<HomeScreen/>:<AuthScreen/>}
    </div>
  )
}

export default HomePage
