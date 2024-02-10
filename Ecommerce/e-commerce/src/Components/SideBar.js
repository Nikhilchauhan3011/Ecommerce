import React, { useState } from "react";
import "../ComponentsCss/sidebar.css";
import Product from "./Product";
import SimilarProducts from "./SimilarProduct";
import CommentsAndReviews from "./CommentsAndReviews";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
function SideBar(){
    const [Trending ,SetTrending] = useState(false);
    const [backGroundColor, setBg]= useState(false);
    function handleMouseOver(){
        SetTrending(true);
        setBg(true);
    }

    function handleMouseLeave(){
        SetTrending(false);
        setBg(false);
    }


    
    return (
        // <div className="bigcontainer">
            <div className="sidebar">
                <div style={{marginTop:'20px', marginLeft:'8px'}}>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    {!backGroundColor && (
                    <div>
                        <h6 className="myH6">Trending products</h6>
                    </div>
                    )}
                    {backGroundColor && (
                    <div style={{backGroundColor:'#deefe7'}}>
                        <h6 className="myH6">Trending products</h6>
                    </div>
                    )}
                    {Trending && (  
                                    <div style={{marginLeft : '10px', width:'100px', transition : '0.5s'}}>
                                        <a href="" ><h6>- Men</h6></a>
                                        <a href="" ><h6>- Women</h6></a>
                                        <a href="" ><h6>- Kids</h6></a>
                                        <a href="" ><h6>- Adult</h6></a>
                                    </div>
                                )} 
                </div>
                <hr></hr>
                <div>
                    <a href="_______">
                        <h6>WishList</h6>
                    </a>
                </div>
                <hr></hr>
                <div>
                    <a href="_______">
                        <h6>Special for you</h6>
                    </a>                
                </div>
                <hr></hr>
                <div>
                    <a href="_______">
                        <h6>Join Exclusive !</h6>
                    </a>
                </div>
                <hr></hr>
                </div>
            </div>
        
    );
}

export default SideBar;