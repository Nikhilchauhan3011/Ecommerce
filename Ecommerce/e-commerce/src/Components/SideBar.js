import React from "react";
import "../ComponentsCss/sidebar.css";
import Product from "./Product";
import SimilarProducts from "./SimilarProduct";
import CommentsAndReviews from "./CommentsAndReviews";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
import Categories from "./Categories";
import NavBar from "./NavBar";
import Footer from "./Footer";
function SideBar(){
    return (
        <>

        <div className="bigcontainer">
            <div className="sidebar">
                

            </div>
            <div className="maincontainer">
                
                <Categories />
                <SimilarProducts/>
                <CommentsAndReviews/>
                
            </div>
            {/* <div className="profilecontainer">
                <Profile></Profile>
            </div> */}
            {/* <div className="pendingordercontainer">
                <PendingOrders></PendingOrders>
                <SimilarProducts></SimilarProducts>
            </div> */}
       </div>   
       </> 
        
    );
}

export default SideBar;