import { useState } from "react";


function JoinEx(){
    const [exclusive , setExclusive] =  useState(false);
    const [supers , setSupers] =  useState(false);



    return (
        <div style={{display:'flex'}}>
            <span style={{width:'250px', height:'500px', backgroundColor:'black'}}>

            </span>
            <span style={{width:'250px', height:'500px',backgroundColor:'black', marginLeft:'30px'}}>

            </span>


        </div>
    );
}

export default JoinEx;