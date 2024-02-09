import React from "react";
import "../ComponentsCss/sidebar.css";
import Product from "./Product";
import SimilarProducts from "../SimilarProduct";
import CommentsAndReviews from "./CommentsAndReviews";
function SideBar(){
    return (
        <div className="bigcontainer">
            <div className="sidebar">
                

            </div>
            <div className="maincontainer">
                <Product />
                <SimilarProducts/>
                <CommentsAndReviews/>
            </div>
       </div>    
        
    );
}

export default SideBar;