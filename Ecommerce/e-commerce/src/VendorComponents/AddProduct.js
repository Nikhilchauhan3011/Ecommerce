import VendorNavBar from './VendorNavBar'
import { VendorSidebar } from './vendorSidebar'
import Footer from '../Components/Footer'
import '../VendorComponentCss/AddProduct.css'
import React,{ useState } from 'react'
import Categories from '../Components/Categories'
export const AddProduct=()=>{
    const [selectedCategory,setSelectedCategory]=useState("");
    const [quantity,setQuantity] = useState("1");
    const [pricePerProduct,setPricePerProduct] = useState("0");
    const totalPrice = Number(quantity)*Number(pricePerProduct);
    const [imageFiles, setImageFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles((prevFiles) => [...prevFiles, ...files]);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Images:', imageFiles);
      };

      const handleCategory=(e)=>{
        setSelectedCategory(e.target.value);
      }

      const CategoriesList = [
        {id:1,name:"Clothes",value:"clothes"},
        {id:2,name:"Shoes",value:"shoes"},
        {id:3,name:"Electronics",value:"electronics"},
        {id:4,name:"Toys",value:"toys"},
        {id:5,name:"Beauty Accessories",value:"beauty_accessories"}
      ]

    return (
        <div className="fullContainer">
            <VendorNavBar/>
            <div style={{display:'flex'}}>
            <div className="addProduct">
                <form className='media-form' onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center', color:'white',textDecoration:'underline'}}>Add Product</h1>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="productName">Product Name</label>
                            <input type="text" className="form-control" id="productName" placeholder="Jeans" />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="brandName">Brand Name</label>
                            <input type="text" className="form-control" id="brandName" placeholder="flying machine" />
                        </div>

                        </div>
                        
                        <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label for="brandName">Category</label>
                            <select value={selectedCategory} onChange={handleCategory}>
                                <option value="">--Select--</option>
                                {CategoriesList.map(category=><option key={category.id} value={category.value}>{category.name}</option>)}
                            </select>
                        </div>
                        </div>

                        <div className="form-row">
                        <div className="form-group col-md-2">
                            <label for="productQuantity">Product Quantity</label>
                            <input type="number" className="form-control" id="productQuantity" onChange={(e)=>setQuantity(e.target.value)} />
                        </div>

                        <div className="form-group col-md-3">
                            <label for="productPrice">Unit Price (Rs.)</label>
                            <input type="number" className="form-control" id="productPrice" onChange={(e)=>setPricePerProduct(e.target.value)} placeholder='Rs.' />
                        </div>

                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="totalPrice">Total Price (Rs.)</label>
                            <input type="text" className="form-control" id="totalPrice" value={totalPrice}  readOnly></input>
                        </div>

                        </div>
                    <label for='description'>Description</label>
                    <textarea type='text' id='description' placeholder='full description of product'/>
                        <br></br>

                    <div className='form-row'>
                        <div className='form-group col-md-6'>

                                <label>
                                    Select Images:
                                    <input type="file" accept="image/*" multiple onChange={handleFileChange} />
                                </label>

                                <br />

                                {/* Display selected images (optional) */}
                                {imageFiles.length > 0 && (
                                    <div>
                                    <p style={{color:'white'}}>Selected Images:</p>
                                    <ul style={{color:'white'}}>
                                        {imageFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                        ))}
                                    </ul>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-2'>
                            <button type='submit' className='btn btn-success' >Add product </button>
                        </div>
                    </div>
                </form>
            </div>
            <VendorSidebar/>
            </div> 
            <Footer/>
        </div>
    )
}