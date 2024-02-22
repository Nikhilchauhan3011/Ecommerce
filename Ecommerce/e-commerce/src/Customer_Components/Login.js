import '../ComponentsCss/LoginMain.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import shoppingImag from '../Icons/shopping2.jpeg';
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import instagram from   '../Icons/instagram.png';
import facebook from   '../Icons/facebook.png';
import gmail from   '../Icons/gmail.png';

function L(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginAs, setLoginAs] = useState('customer'); // Default value is 'customer'
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [path,setPath] =  useState(location.state?.paths || '/');



    useEffect(() =>{
        function print(){
            console.log("Aditya " + path +" s");
        }
        print();
    },[]);

    const handleLogin = () => {
        // Simple form validation
        if (!username || !password || !loginAs) {
        setError('Please enter both username, password, and select a login type.');
        return;

        }

        // Your more advanced login logic here
        console.log('Logging in:', username, password, 'as', loginAs);

        // Reset error on successful login
        setError('');
        console.log(loginAs);
        
        if(loginAs === "customer"){
            customerLogin();
        }
        else{
            vendorLogin();
        }

    };


    async function vendorLogin(){
        const email ={
            "email" : username,
            "password" : password
        };
        const response = await axios.get("http://localhost:7070/Vendor/Login", {
            params: email
          });
          console.log(response.data.id);
          if(response.data.status == true){
            navigate("/VendorHome2", {state : {id : response.data.id, name : response.data.name}});
          }
          else{
            setError('wrong Email or Password');
          }
        
    }




    async function customerLogin(){
        const email ={
            "email" : username,
            "password" : password
        };
        const response = await axios.get("http://localhost:7070/Customer/Login", {
            params: email
          });

          if(response.data == true){
            if(loginAs=='customer'){
                navigate(path);
            }
          }
          else{
            setError('wrong Email or Password');
          }
        
    }

    return(
        <div className="full-container">
            <div className='inner-container'>
                
                <div className='image-container'>
                    <img src={shoppingImag}></img>
                </div>

                
                <div className="login-container">
                <h2 style={{color:'#002333', textDecoration:'underline'}}>Login</h2>
                <form>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Username:
                    </h4>
                    <br></br>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </label>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Password:
                    </h4>
                    <br></br>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                    <label>
                    <h4 style={{marginBottom:'0px'}}>
                    Login As:
                    </h4>
                    <br></br>
                    <select
                        value={loginAs}
                        onChange={(e) => setLoginAs(e.target.value)}
                        style={{marginBottom:'32px'}}
                    >
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                    </select>
                    </label>
                    {error && <p className="error-message">{error}</p>}
                    <button type="button" onClick={handleLogin}>
                    Login
                    </button>
                    <p className="sign-up-link">
                    Don't have an account? <a href="/SignUp">Sign Up</a>
                    </p>
                    <div style={{marginTop:'80px',display:'flex'}}>
                        <img src={facebook} style={{width:'25px', height:'25px', marginLeft:'250px'}}></img>
                        <img src={instagram} style={{width:'25px', height:'25px',marginLeft:'20px'}}></img>
                        <img src={gmail} style={{width:'25px', height:'25px', marginLeft:'20px'}}></img>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default L;