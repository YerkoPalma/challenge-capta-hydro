import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Home } from './Home'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Login()} />
      <Route path="/home" element={Home()} />
    </Routes>
  </BrowserRouter>
)