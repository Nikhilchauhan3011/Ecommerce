import Fashion from "../Icons/Category.jpg"
import '../ComponentsCss/Offers.css';

function Offers(){

   const trending = [
    {id:1, image:Fashion },
    {id:2, image: Fashion },
    {id:3, image:Fashion },
    {id:4, image:Fashion },
    {id:5, image:Fashion },
    {id:6, image:Fashion },
    {id:7, image:Fashion },
   ]

    return (
        <div className="media-scroller">
            
          {trending.map((trend) =>  
           (<div key={trend.id} className="media-element">
             <img src={trend.image} alt="Fashion Category" className="categories"></img>
             <h3 className="categories-text">Fashion</h3>
           </div>))}

        </div>
    );
}

export default Offers;