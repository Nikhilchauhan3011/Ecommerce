import Fashion from "../Icons/Category.jpg"
import '../ComponentsCss/Categories.css';

function Categories(){
    return (
        <div className="media-scroller">
            
          <div className="media-element">
             <img src={Fashion} alt="Fashion Category" className="categories"></img>
             <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>

          <div className="media-element">
             <img src={Fashion} alt="Fashion Category" className="categories"></img>
             <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>
          <div className="media-element">
          <img src={Fashion} alt="Fashion Category" className="categories"></img>
          <h3 className="categories-text">Fashion</h3>
          </div>


        </div>
    );
}

export default Categories;