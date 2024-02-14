import { useState } from "react";
import "../ComponentsCss/Cart.css";
import Image from "../Icons/Category.jpg";

function Cart(){

   const [amount,setAmount] = useState(1);

    const carts = [
       { id:1,img: Image ,prodName:"Gulab Jal" ,prodCount:amount},
       { id:2,img: Image ,prodName:"Mobile Phone" ,prodCount:amount},
       { id:3,img: Image ,prodName:"Gulab Jal" ,prodCount:amount},
       { id:4,img: Image ,prodName:"Mobile Phone" ,prodCount:amount},
       { id:5,img: Image ,prodName:"Gulab Jal" ,prodCount:amount},
       { id:6,img: Image ,prodName:"Mobile Phone" ,prodCount:amount},
       { id:7,img: Image ,prodName:"Gulab Jal" ,prodCount:amount},
       { id:8,img: Image ,prodName:"Mobile Phone" ,prodCount:amount},
    ]

    
    const setDecrease =()=>{
        setAmount(amount-1);
    }

    const setIncrease =()=>{
        setAmount(amount+1);
    }

    return (
        <>
            <div className="mainContainer">
             
            { carts.map( cart =>
             ( <div className="cartContainer">
                 <img className="cartImage"  key={cart.id} src={cart.img}></img>
                 <div className="cartInfo">
                    <h3>{cart.prodName}</h3>
                    <p>Tune in to the Make it Big Podcast — our thought leadership audio 
                    series for retailers, entrepreneurs and 
                    ecommerce professionals. You'll get expert insights, strategies and tactics to help grow
                     your business.</p>
                    <button className="btn btn-warning" onClick={setDecrease}>-</button>
                    <div style={{fontSize:'20px', display:'inline',margin:'5px'}}>{cart.prodCount}</div>
                    <button className="btn btn-primary" style={{display:'inline'}} onClick={setIncrease}>+</button> 
                 </div>  

                 <div style={{display:"grid", alignContent:'flex-end'} }>
                    <button className="btn btn-danger">Remove</button>
                    <button className="btn btn-success">Buy</button>
                 </div> 
              </div>)
              )
              
            } 

            <div className="cartTotal"> 
            <h2 style={{color:'black'}}> Items Total : 2344</h2>
            </div>

            </div>
        </>
    );
}
export default Cart;