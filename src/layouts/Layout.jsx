import Header from '@/components/custom/Header';
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {
  const {user,isLoaded,isSignedIn} = useUser();

  if (!isSignedIn&&isLoaded) {
    return <Navigate to={'auth/sign-in'}/>
  }

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
