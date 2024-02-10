import React from 'react';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import './App.css';
import Product from './Components/Product';
<<<<<<< HEAD
import Profile from './Components/Profile';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import L from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
>>>>>>> d6de115c8f3fa2a73b26bf71cecf54786e0ef3e4


import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import Home from './Components/Home';
 
function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
     
     <Routes>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
     </Routes>
    </BrowserRouter>
=======
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<L></L>}/>
                <Route path='/Home/Product' element={<Home></Home>}/>
                <Route path='/Home/Pending' element={<Home></Home>}/>
                <Route path='/Profile' element={<Profile></Profile>}/>
                <Route/>
                <Route/>
            </Routes>
        </Router>
    </div>

    // <div className="App">
    //   <NavBar />
    //   <div style={{display:'flex'}}> 
    //     <SideBar />
    //     <Profile></Profile>
    //   </div>
    //   <Footer />
    //   {/* <Login></Login> */}
      
    // </div>
    // <Login></Login>
    // <div>
    //   <Login></Login>
    // </div>
>>>>>>> d6de115c8f3fa2a73b26bf71cecf54786e0ef3e4
  );
}

export default App;
