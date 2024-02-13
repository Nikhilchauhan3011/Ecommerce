import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/pendingorder.css';
import { useState } from 'react';


function PendingOrders(){
    const[totalPrice, setTotalPrice] = useState(0);
    const[address, setAddress] = useState("204, Sai smita chs, near mahila samiti school, thakurli(E)");
    const[productName,setProductName] = useState("Fossil's premium white watch");
    const[arrivalDate, setArrivaldate] = useState("Arriving by 11 Nov by 9 pm")

    return(
        <div style={{marginTop:'25px'}}>
            <div style={{display:'flex'}}>   
                <div className="blinking-dot"></div>
            <h2 style={{color : '#002333', textDecoration:'underline', marginLeft:'5px'}}>Live Orders</h2>
            </div>
        <div className='pendinordercontainer'>
            <span id="image" style={{ width: '30%' }}>
                <img src={Watch} style={{ width: '400px', height: '400px' }} alt="Watch" />
            </span>
            <span id="description" style={{ marginLeft: '150px', width: '60%' }}>
                <div>
                    <h2>{productName}</h2>
                    <br></br>
                    <br></br>
                    <p>
                        <h3>
                            Total Price : {totalPrice}
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
                </span>
        </div>
        </div>
    );
}

export default PendingOrders;