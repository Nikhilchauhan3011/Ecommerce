import React from 'react';
import NavBar from './Customer_Components/NavBar';
import SideBar from './Customer_Components/SideBar';
import Footer from './Customer_Components/Footer';
import './App.css';
import Product from './Customer_Components/Product';

import Profile from './Customer_Components/Profile';
import Register from './Customer_Components/Register';
import L from './Customer_Components/Login';
import Home from './Customer_Components/Home';
import Cart from './Customer_Components/Cart';



import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import HomePage from './Customer_Components/HomePage';
import { VendorHome } from './VendorComponents/VendorHome';
import { AddProduct } from './VendorComponents/AddProduct';

// import Home from './Components/Home';
 
function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/Login' element={<L></L>}/>
                <Route path='/Home/Product' element={<Home></Home>}/>
                <Route path='/Home/Pending' element={<Home></Home>}/>
                <Route path='/' element={<HomePage></HomePage>}/>
                <Route path='/Home/Success' element={<Home></Home>}/>
                <Route path='/Home/Exclusive' element={<Home></Home>}/>
                <Route path='/SignUp' element={<Register></Register>}/>

                <Route path='/VendorHome' element={<VendorHome/>}/>
                <Route path='/VendorHome/AddProducts' element={<AddProduct/>}/>

                <Route path='/Home/Cart' element={<Home></Home>}/>

                <Route/>
            </Routes>
        </Router>
    </div>


  );
}

export default App;
