import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/Product.css';
import StarRating from './starts.js';
import { useState } from 'react';

function Product() {

    const [productName, setProductName] = useState('Dummy product');
    const [productDesc, setProductDesc] = useState('This is dummy info about product');
    const [productRating, setProductRating] = useState(3);

    // setProductDesc('This dummy info');
    
    
    return (
        <div className="ProductContainer">
            <div id="image" style={{ width: '30%' }}>
                <img src={Watch} style={{ width: '550px', height: '550px' }} alt="Watch" />
            </div>
            <div id="description" style={{ marginLeft: '250px', width: '60%' }}>
                <div>
                    <h1 style={{color:'#002333'}} >{productName}</h1>
                    <h3 style={{color:'#002333'}}>{productDesc}</h3>
                    <h5 style={{color:'#002333'}}>
                        
                    </h5>
                </div>
                <div>
                    <StarRating rating={productRating}></StarRating>
                </div>
                <div className="buttonContainer">
                    <button className="customButton addToCart">Add to Cart</button>
                    <button className="customButton buyNow">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;