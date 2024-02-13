import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/pendingorder.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Success(){
    const[totalPrice, setTotalPrice] = useState(0);
    const[address, setAddress] = useState("204, Sai smita chs, near mahila samiti school, thakurli(E)");
    const[productName,setProductName] = useState("Fossil's premium white watch");
    const[arrivalDate, setArrivaldate] = useState("Arriving by 11 Nov by 9 pm")
    return(
        <div style={{marginTop:'25px'}}>
            <div className='pendinordercontainer'>
                <span id="image" style={{ width: '30%' }}>
                    <img src={Watch} style={{ width: '400px', height: '400px' }} alt="Watch" />
                </span>
                <span id="description" style={{ marginLeft: '150px', width: '60%',color:'#deefe7'}}>
                    <div>
                        <p style={{marginTop :'20px'}}> 
                            <h1>
                                Bill
                            </h1>
                            <h2>{productName}</h2>
                            <h3>
                                Total Price : {totalPrice};
                            </h3>
                            <br></br>
                            <h3>
                                Delivery Address :
                                <br></br>
                                    {address}
                            </h3>
                            <br></br>
                            <h3>
                                Arriving by :
                                <br></br>
                                {arrivalDate}
                            </h3>
                            
                        </p>

                    </div>
                    <div className="buttonContainer" style={{marginTop:'100px'}}>
                        <button className="customButton buyNow">Continue Shopping ?</button>
                        <br></br>
                        <a href='_____' style={{textDecoration:'none', color:'#deefe7', marginLeft:'70px'}}>Print Bill </a>
                    </div>
                    </span>
            </div>

        </div>
    );
}


export default Success;