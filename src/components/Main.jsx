import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Home } from './Home'
import { Users } from './Users'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Login()} />
      <Route path="/home" element={Users()} />
    </Routes>
  </BrowserRouter>
)