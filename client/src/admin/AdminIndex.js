import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Drivers from './pages/drivers/Drivers'
import Requests from './pages/requests/Requests'
import Profile from './pages/profile/Profile'

export default function AdminIndex() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/drivers" element={<Drivers/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </>
  )
}
