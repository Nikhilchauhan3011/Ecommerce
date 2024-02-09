import Watch from '../Icons/watch.jpg';
import '../ComponentsCss/Product.css';

function Product() {
    return (
        <div className="ProductContainer">
            <span id="image" style={{ width: '30%' }}>
                <img src={Watch} style={{ width: '550px', height: '550px' }} alt="Watch" />
            </span>
            <span id="description" style={{ marginLeft: '250px', width: '60%' }}>
                <div>
                    <h1>Product Description</h1>
                    <h5>
                        LOOK FANTASTIC & CHARMING: Fajas Colombian bodysuit shapewear is designed to specially shape the midsection with targeted firm tummy control to emphasize you're natural curves. High waist design reduces waistline creating a charming feminine silhouette. It’s designed to give you a smoother curve to help you look great in dresses!
                        FIRM CONTROL & COMPRESSION: Fajas bodysuit trims the waist, compresses the belly, and lifts the butt, and the Outer with zipper inner with hooks designed to specifically shape the midsection with targeted double tummy control to support and compression your waist.
                        NON-SLIP SHOULDER STRAP: These faja bodysuit Straps are fully adjustable and non-slip in design. The Open Bust design allows you to wear your favorite bra and push up your breasts, effectively immobilizing the loose fat around your armpits and back.
                        CONVENIENT USE & SEXY DESIGN: thong style with lace
                    </h5>
                </div>
                <div className="buttonContainer">
                    <button className="customButton addToCart">Add to Cart</button>
                    <button className="customButton buyNow">Buy Now</button>
                </div>
            </span>
        </div>
    )
}

export default Product;