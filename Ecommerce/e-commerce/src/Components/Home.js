import NavBar from "./NavBar";
<<<<<<< HEAD
import SideBar from "./SideBar";
import Footer from "./Footer";
function Home(){
    return (
        <>
        <NavBar />
        <SideBar />
        <Footer />
        </>

    );
}
=======
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

import Product from "./Product";
import SideBar from "./SideBar";
import SimilarProducts from "./SimilarProduct";
import Profile from "./Profile";
import PendingOrders from "./PendingOrders";
import CommentsAndReviews from "./CommentsAndReviews";
function Home(){
    const location = useLocation();

    const path = location.pathname;

    return(
        <div>
            <NavBar></NavBar>
            <div style={{display:'flex'}}>
            <SideBar></SideBar>
            {path === '/Home/Product' && (
                <div>
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
            {path === '/Home/Profile' && (
                    <div>
                    <Profile></Profile>
                    </div>
            )}
            </div>
            <Footer></Footer>
            
        </div>
    );
}


>>>>>>> d6de115c8f3fa2a73b26bf71cecf54786e0ef3e4
export default Home;