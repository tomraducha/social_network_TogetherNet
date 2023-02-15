import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cookies from "js-cookie";
import { UidContext } from './components/AppContext'
import { useUserData } from './atoms/UserData/index';
import { getUsers } from './action/user.action'

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      const token = Cookies.get("token");
      const { data } = useUserData(token);
      if (data) dispatch(getUsers)
    }
  }, []
  )
  return (
    <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />


    </div >
  )
}
