import NavBar from "./NavBar"

import { useLocation } from "react-router-dom";
import Footer from "./Footer";

import Product from "./Product";
import SideBar from "./SideBar";
import SimilarProducts from "./SimilarProduct";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
import CommentsAndReviews from "./CommentsAndReviews";
import Success from "./SuccessBuy";
import JoinEx from "./JoinExclusive";
function Home(){
    const location = useLocation();

    const path = location.pathname;


    return(

        <div>
            <NavBar></NavBar>
            <div style={{display:'flex'}}>
            <SideBar></SideBar>
            {path === '/Home/Product' && (
                <div style={{width:'85vw'}}>
                    <Product></Product>
                    <SimilarProducts></SimilarProducts>
                    <CommentsAndReviews></CommentsAndReviews>
                </div>
            )}
            {path === '/Home/Pending' && (
                <div>
                    <PendingOrders></PendingOrders>
                    <SimilarProducts></SimilarProducts>
            </div>
            )}
            {path === 'Home/Profile' && (
                    // <div style={{width:'700px'}}>
                    //     <Profile></Profile>
                    // </div>
                    <Profile></Profile>
            )}
            {path === '/Home/Success' &&(
                <Success></Success>
            )}
            {path === '/Home/Exclusive' && (
                    // <div style={{width:'700px'}}>
                    //     <Profile></Profile>
                    // </div>
                    <div>
                        <JoinEx></JoinEx>
                        <SimilarProducts></SimilarProducts>
                    </div>
            )}
            </div>

            <Footer></Footer>
            
        </div>
    );
}



export default Home;