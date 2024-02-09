import "../ComponentsCss/Profile.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profile from '../Icons/profile.jpeg';
import box from '../Icons/box.png';
import user from '../Icons/user.png';
import location from '../Icons/location-pin.png';


function Profile(){
    const [expandedState, setExpandedState] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
      });
    
      const handleOnClick = (divId) => {
        setExpandedState((prevState) => ({
          ...prevState,
          [divId]: !prevState[divId],
        }));
      };

    const handleLogout = () => {
        console.log('Logout clicked');
      };

    return(
        <div style={{ position: 'relative' }}>
            <div className="position-absolute" style={{ top: 0, right: 0, margin: '10px' }}>
                <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
                style={{
                    transition: 'background-color 0.3s, color 0.3s', // Adding hover effect
                }}>
          Logout
        </button>
            </div>
            <div style={{height : '250px', backgroundColor : '#002333', marginTop:'30px' , borderRadius : '15px', display:'flex'}}>
                <span style={{width :"200px"}}>
                    <img src={profile} style={{borderRadius : '10px', height:'100%'}}>

                    </img>
                </span>
                <span style={{marginLeft:'50px'}}>
                    <h4 style={{color : 'white'}}>Customer Information here</h4>
                </span>
            </div>
            <hr></hr>
            <div className="mydiv"
                style={{
                    height: expandedState.div1 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => handleOnClick('div1')}>
                        <br />
                        {!expandedState.div1 &&
                        (
                        <center>
                            <img src={box} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '30px' }}>Your Orders</h3>
                        </center>
                        )}
            </div>
            <div className="mydiv"
                style={{
                    height: expandedState.div2 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => handleOnClick('div2')}>
                        <br />
                        {!expandedState.div2 &&
                        (
                        <center>
                        
                        <img src={user} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '30px' }}>Edit Profile</h3>
                        
                        </center>
                        )}
                        
            </div>
            <div className="mydiv"
                style={{
                    height: expandedState.div3 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => handleOnClick('div3')}>
                        <br />
                        {!expandedState.div3 &&
                        (
                        <center>
                            <img src={location} alt="order box" style={{width:'50px', height:'50px'}}></img>
                            <h3 style={{ marginTop: '30px' }}>Your Addresses</h3>
                        </center>
                        )}

            </div>
            <div className="mydiv"
                style={{
                    height: expandedState.div4 ? '700px' : '150px',
                    backgroundColor: '#deefe7',
                    marginTop: '30px',
                    borderRadius: '15px',
                    transition: 'height 0.5s', // Adding animation effect to height change
                    cursor: 'pointer',
                    }}
                onClick={() => handleOnClick('div4')}>
                        <br />
                        {!expandedState.div4 &&
                        (
                        <center>
                            <h3 style={{ marginTop: '30px' }}>Edit Profile</h3>
                        </center>
                        )
                        }
            </div>
        </div>
    );
}

export default Profile;