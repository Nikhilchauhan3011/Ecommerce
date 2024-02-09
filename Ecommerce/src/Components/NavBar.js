import React from 'react';
import Wallet from '../Icons/wallet.png';
import Cart from '../Icons/cart.png';
import Login from '../Icons/login.png';
import Search from '../Icons/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
    <div>
      <div style = {{width:'100%'}}>
        <nav style={{ backgroundColor: '#012a4a', padding: '10px', color: '#002333', display: 'flex' }}>
        <span style={{ marginLeft: '10px', color: '#fff' , marginTop : '7px',font:'16px'}}>Logo</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px', fontSize:'20px'}}>Home</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px' ,fontSize:'20px'}}>Profile</span>
          <span style={{ marginLeft: '130px'}}>
                <input
                    type="text"
                    placeholder="Search"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '850px' }}/>
          </span>
          <span style={{ marginLeft: '10px', marginRight: '2px', marginTop:'6px' }}><img src={Search} width={35} height={35} alt="search"></img></span>
          <span style={{ marginLeft: '110px', marginRight: '2px', marginTop:'10px' }}><img src={Wallet} width={25} height={25} alt="wallet"></img></span>
          <span style={{ marginLeft: '25px', marginRight: '20px', marginTop:'10px'  }}><img src={Cart} width={25} height={25} alt="Cart"></img></span>
          <span style={{ marginLeft: '5px', marginRight: '30px', marginTop:'10px', color:'white' }}><img src={Login} width={25} height={25} alt="Login"></img></span>
          
          
        </nav>
      </div>
    </div>
  );
};

export default NavBar;