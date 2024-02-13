import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
    <div >
      <div >                            
        <nav style={{ backgroundColor: '#012a4a', padding: '10px', color: '#002333', display: 'flex' }}>
        <span style={{ marginLeft: '10px', color: '#fff' , marginTop : '7px',font:'16px'}}>Logo</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px', fontSize:'20px'}}>Home</span>
          <span style={{ marginLeft: '20px', color: '#fff' , marginTop : '7px' ,fontSize:'20px'}}>Profile</span>
          
          <span style={{ marginLeft: '400px', marginRight: '2px', marginTop:'10px' }}><h5>Hello, vendor</h5></span> 
        </nav>
      </div>
    </div>
  );
};

export default NavBar;