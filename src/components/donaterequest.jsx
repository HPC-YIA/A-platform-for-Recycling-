import React from "react";
import { useState } from "react";

import Iteminfo_form from "./donateIteminfo";




export default function CollectionRequest(){

    const [item,setItem]=useState(null);


    function addItem(e){
    // console.log("got clicked")
    setItem(Iteminfo_form)
    console.log(item)
    }

    return(
        <div className="trend-main">
            <div className="donatediv">
                
                <div className="itemform">
                <h2> Your Donated Item Infomation</h2> 
                <Iteminfo_form/>
                {item}
                
                

                    
                    <button className="additembtn" onClick={(e)=>addItem(e)}>Add More Item</button>
                </div>
                <div className="requestform">
                <h2> Send Collection Request</h2> 
                    <form id="personinfo">
                       
                       <input type='text' className="form-control" name='Name' placeholder="Name"></input>
                       <input type='text' className="form-control" name='Phone' placeholder="Phone Number"></input>
                       <input type='text' className="form-control" name='Email' placeholder="Email Address"></input>
                        <select id='state' className="form-control"> 
                            <option disabled value="Select Your State">Select Your State</option>
                            <option value='NT'>NT</option>
                            <option value='VIC'>VIC</option>
                            <option value='WA'>WA</option>
                            <option value='QLD'>QLD</option>
                            <option value='NSW'>NSW</option>
                            



                        </select>
                        <input type='text' className="form-control" name='StreeNumber' placeholder="Stree Number"></input>
                        <input type='text' className="form-control" name='StreeName' placeholder="Stree Name"></input>
                    
                    
                    </form>
                    </div>

                    <button className="submitbtn" type="submit ">Submit</button>
                    
                </div>


            </div>
    )
}