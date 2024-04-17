import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Trips from './pages/trips/Trips'

export default function AdminIndex() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/trips" element={<Trips/>}/>
        </Routes>
    </>
  )
}
