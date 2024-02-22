import VendorNavBar from './VendorNavBar'
import { VendorSidebar } from './vendorSidebar'
import Footer from '../Customer_Components/Footer.js'
import '../VendorComponentCss/AddProduct.css'
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


export const AddProduct=()=>{
    const [selectedCategory,setSelectedCategory]=useState("");
    const [quantity,setQuantity] = useState("1");
    const [pricePerProduct,setPricePerProduct] = useState("0");
    const totalPrice = Number(quantity)*Number(pricePerProduct);
    const [imageFiles, setImageFiles] = useState([]);
    const [productName, setProductName] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [categoryId , setCategoryId] = useState(0);
    const [category , setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const location = useLocation();
    const receivedData = location.state;
    const [subcategoryId , setSubcategoryId] = useState(0);
    const [description , setDescription] = useState("");
    const [date , setDate] = useState("");
    const navigate = useNavigate();


    // const []


    useEffect(() => {
        const getCategories = async () => {
          try {
            console.log("hello......");
            const response = await axios.get("http://localhost:7070/Category/AllCategories");
            setCategory(response.data);
            // console.log(response.data);
            // Instead of setting categoryId immediately, use it directly in getSubCategories
          } catch (error) {
            throw new Error(error);
          }
        }
      
        getCategories();
      }, []);
      
      const getSubCategories = async (categoryId) => { 
        try {
          console.log("inside method :"+ categoryId);
          const response = await axios.get("http://localhost:7070/SubCategory/GetOneCategory", {
            params: { "categoryId": categoryId }
          });
          setSubcategory(response.data);
        } catch (error) {
          throw new Error(error);
        }
      }


    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles((prevFiles) => [...prevFiles, ...files]);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Images:', imageFiles);
      };

    

    const handleOnSubmit  = async() => {
        const currenrDate = new Date();
        setDate(currenrDate.toISOString());
        const data = {
                        "productName" : productName,
                        "ProductBrand" : productBrand,
                        "Category" : categoryId,
                        "Subcategory" : subcategoryId,
                        "price" : pricePerProduct,
                        "description" : description,
                        "dateOfAdding" : date
                    }


        try{
            const response = await axios.post("http://localhost:7070/VendorProduct/AddProduct",data);
            navigate("/VendorHome2", {state : {id : response.data.id, name : response.data.name}});   
        }
        catch(err){
            console.log(err);
            throw new Error(err);
        }
    
    }

      




    return (
        <div className="fullContainer">
            <VendorNavBar name={receivedData.name}/>
            <div style={{display:'flex'}}>
            <div className="addProduct">
                <form className='media-form' onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center', color:'white',textDecoration:'underline'}}>Add Product</h1>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="productName">Product Name</label>
                            <input type="text" className="form-control" id="productName" placeholder="Jeans" onChange={(e)=>{setProductName(e.target.value)}}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="brandName">Brand Name</label>
                            <input type="text" className="form-control" id="brandName" placeholder="flying machine" onChange={(e)=>{setProductBrand(e.target.value)}}/>
                        </div>

                        </div>
                        
                        <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label for="brandName">Category</label>
                            <select onChange={(e) => { getSubCategories(e.target.value); setCategoryId(e.target.value)}}>
                                <option value="0">--Select--</option>
                                {category.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                    {cat.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>

                        <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label for="brandName">Sub-Category</label>
                            <select onChange={(e)=>{setSubcategoryId(e.target.value)}}>
                                <option value="1">--Select--</option>
                                {subcategory.map(cat=><option key={cat.id} value={cat.id}>{cat.subCategoryName}</option>)}
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
                    <textarea type='text' id='description' placeholder='full description of product' onChange={(e)=>{setDescription(e.target.value)}}/>
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
                            <button type='submit' className='btn btn-success' onClick={handleOnSubmit} >Add product </button>
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