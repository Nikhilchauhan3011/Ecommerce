import '../ComponentsCss/Register.css';

import React , { useState } from 'react';
import { Link } from 'react-router-dom';


function Register(){

  let [isChecked,setChecked] = useState(false);

  let [height,setHeight] = useState('100vh');

  let [additionalFields, setAdditionalFields] = useState([]);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      setHeight('120vh');
      setAdditionalFields([
        <>

      <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputShopName">Shop Name</label>
        <input type="text" className="form-control" id="inputShopName" placeholder="Puma" />
      </div>

      <div className="form-group col-md-6">
        <label for="inputShopName">Adhar Number</label>
        <input type="number" className="form-control" id="inputAdharNumber" placeholder="1234 2345 3456" />
      </div>

      </div>

      <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputGST">GST Number</label>
        <input type="number" className="form-control" id="inputGST" placeholder="54482154" />
      </div>

      <div className="form-group col-md-6">
        <label for="inputShopMobile">Mobile</label>
        <input type="number" className="form-control" id="inputShopMobile" placeholder="548789898" />
      </div>

      </div>


      <div className="form-row">
  <div className="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" className="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
</div> 

      <div className="form-group">
        <label for="inputShopAddress">Shop Address</label>
        <input type="text" className="form-control" id="inputShopAddress" placeholder="1235 Vancouver " />
      </div>
     
    
    
      </> 
      ]);
    } else {
      setAdditionalFields([]);
      setHeight('100vh');
    }
  };

    return(   

<div className='bodyclass' style={{ height: height }}>
<div className="container card p-3 mt-4">
<form>
<h1 style={{textAlign:'center'}}>Register</h1>
<br></br>

<div className="form-row">
<div className="form-group col-md-6">
  <label for="inputFirstName">First Name</label>
  <input type="text" className="form-control" id="inputFirstName" placeholder="Arya" />
</div>

<div className="form-group col-md-6">
  <label for="inputLastName">Last Name</label>
  <input type="text" className="form-control" id="inputLastName" placeholder="Stark" />
</div>
</div>

<div className="form-row">
<div className="form-group col-md-6">
    <label for="inputEmail">Email</label>
    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
  </div>

  <div className="form-group col-md-6">
    <label for="inputMobile">Mobile</label>
    <input type="number" className="form-control" id="inputMobile" placeholder="9876543210" />
  </div>


</div>  

<div className="form-row">
  
  <div className="form-group col-md-6">
    <label for="inputPassword">Password</label>
    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
  </div>

  <div className="form-group col-md-6">
    <label for="inputConfirmPassword">Confirm Password</label>
    <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
  </div>
</div>

<div className="form-row">
  <div className="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" className="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
</div>

<div className="form-group">
  <label for="inputHomeAddress">Home Address</label>
  <input type="text" className="form-control" id="inputHomeAddress" placeholder="1234 Main St" />
</div>


<div className="form-group">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="gridCheck"  onChange={handleCheckboxChange}/>
    <label className="form-check-label" for="gridCheck">
      Register as a Seller
    </label>
  </div>
</div>


<div>
      {isChecked && additionalFields.map(field => field)}
</div>


<button type="submit" className="btn btn-primary">Sign Up</button>
<p className='loginbtn'>Already Have an Account?  <Link to="/profile">Login</Link> </p> 

     
    




</form>
</div>
</div>



       
    );
}

export default Register;