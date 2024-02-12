import React from 'react';
import Wallet from '../Icons/wallet.png';
import Cart from '../Icons/cart.png';
import Login from '../Icons/login.png';
import Search from '../Icons/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {

  const handleKeyPress = (event) =>{
    if(event.key ==="Enter"){
      console.log(event.target.value);
    }
  }

  return (
    <div >
      <div >                            
        <nav style={{ backgroundColor: '#012a4a', padding: '10px', color: '#002333', display: 'flex' }}>
        <span style={{ marginLeft: '10px', color: '#fff' , marginTop : '7px',font:'16px'}}>Logo</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px', fontSize:'20px'}}>Home</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px' ,fontSize:'20px'}}>Profile</span>
          <span style={{ marginLeft: '100px'}}>
                <input
                    type="text"
                    placeholder="Search"
                    onKeyPress={handleKeyPress}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '840px' }}/>
          </span>
          {/* <span style={{ marginLeft: '10px', marginRight: '2px', marginTop:'6px' }}><img src={Search} style={{width:'25px', height:'25px'}} alt="search"></img></span>  */}
          <button type="button" className="btn btn-success d-flex align-items-center justify-content-center" style={{width:'80px', height:'35px', marginTop:'10px'}}>
                Search
          </button>          
          <span style={{ marginLeft: '90px', marginRight: '2px', marginTop:'10px' }}><img src={Wallet} style={{width:'25px', height:'25px'}} alt="wallet"></img></span>
          <span style={{ marginLeft: '25px', marginRight: '20px', marginTop:'10px'  }}><img src={Cart} style={{width:'25px', height:'25px'}} alt="Cart"></img></span>
          <span style={{ marginLeft: '5px', marginRight: '20px', marginTop:'10px', color:'white' }}><img src={Login} style={{width:'25px', height:'25px'}} alt="Login"></img></span>
          
          
        </nav>
      </div>
    </div>
  );
};

export default NavBar;