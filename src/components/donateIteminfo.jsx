import React from "react";



const  Iteminfo_form=(props)=>{
    return (
        <form id="iteminfo">
                        <select id='items' className="form-control"> 
                            <option disabled value="Select Your Item">Select Your Item</option>
                            <option value='Flip-flops'>Flip-flops</option>
                            <option value='Clothes'>Clothes</option>

                        </select>
                        <input id='item-quantity' type="text" placeholder=" Quantity" className="form-control" >

                        </input>
                        <select id='condition' className="form-control">
                        <option disabled value="Select condition type">Select Condition Type</option>

                        <option value='verygood'>Very Good</option>
                        <option value='good'>Good</option>
                        <option value='torn'>Torn</option>


                        </select>
                        <input className="form-control" id ="comments" type="text" placeholder=" Comments">

                        </input>
                        

                    </form>
    )
}

export default Iteminfo_form;