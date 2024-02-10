import React from 'react';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import './App.css';
import Product from './Components/Product';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     
     <Routes>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
