import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'

export default function AdminIndex() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </>
  )
}
