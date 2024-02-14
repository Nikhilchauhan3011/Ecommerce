
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Offers from "./Offers";
import SimilarProducts from "./SimilarProduct";

function HomePage(){
    return (
        <div>
        <NavBar />
        <div style={{display:'flex'}}>
        <SideBar />
        <div style={{width:'84vw'}}>
            <Offers></Offers>
            <SimilarProducts></SimilarProducts>
        </div>
        </div>
        
        <Footer></Footer>
        </div>

    );
}


export  default HomePage;