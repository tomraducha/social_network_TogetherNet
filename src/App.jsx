import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
    </div>
  )
}