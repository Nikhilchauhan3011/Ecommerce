import React from 'react';
import Wallet from '../Icons/wallet.png';
import Cart from '../Icons/cart.png';
import Login from '../Icons/login.png';
import Search from '../Icons/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {

  const handleKeyPress = (event) =>{
    if(event.key ==="Enter"){
      console.log(event.target.value);
    }
  }

    const location = useLocation();
    const paths = location.pathname;
    const navigate = useNavigate();


    function handleLogin(){
      console.log(paths);
      navigate('/',{state : {paths}});
    }

    function handleCart(){
      navigate('/Home/Cart',{state : {data : paths}});
    }

    function handleWallet(){
      navigate('/Home/Wallet',{state : {data : paths}});
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
          <span style={{ marginLeft: '70px', marginRight: '2px', marginTop:'-15px' }}>
            <imput type='button' onClick={handleWallet}>
              <img src={Wallet} style={{width:'25px', height:'25px',marginLeft:'9px'}} alt="wallet"></img>
              <h6>Wallet</h6>
            </imput>
          </span>
          <span style={{ marginLeft: '25px', marginRight: '20px', marginTop:'-15px'  }}>
            <imput type='button' onClick={handleCart}>
              <img src={Cart} style={{width:'25px', height:'25px',marginLeft:'3px'}} alt="Cart"></img>
              <h6>Cart</h6>
            </imput>
          </span>
          <span  style={{ marginLeft: '5px', marginRight: '20px', marginTop:'-15px', color:'white' }}>
            <imput type='button' onClick={handleLogin}>
              <img src={Login} style={{width:'25px', height:'25px',marginLeft:'7px'}} alt="Login"></img>
              <h6>Login</h6>
            </imput>
          </span>
          
          
        </nav>
      </div>
    </div>
  );
};

export default NavBar;