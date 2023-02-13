import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { UidContext } from './AppContext'
import axios from "axios";
import { useEffect, useState } from 'react'

export default function App() {
  const [uid, setUid] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: "http://localhost:1337/auth/local/register/jwtid",
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    }
    fetchToken();
  }, [uid]);
  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </UidContext.Provider>
    </div>
  )
}