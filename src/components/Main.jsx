import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Login } from './Login'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Login()} />
    </Routes>
  </BrowserRouter>
)