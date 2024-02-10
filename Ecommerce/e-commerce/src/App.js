import React from 'react';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import './App.css';
import Product from './Components/Product';
import L from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';


import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import Home from './Components/Home';
 
function App() {
  return (
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
  );
}

export default App;
