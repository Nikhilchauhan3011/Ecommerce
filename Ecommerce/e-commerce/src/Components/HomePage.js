
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Categories from "./Categories";
import SimilarProducts from "./SimilarProduct";

function HomePage(){
    return (
        <div>
        <NavBar />
        <div style={{display:'flex'}}>
        <SideBar />
        <div style={{width:'84vw'}}>
        <Categories></Categories>
        <SimilarProducts></SimilarProducts>
        </div>
        </div>
        
        <Footer></Footer>
        </div>

    );
}


export  default HomePage;