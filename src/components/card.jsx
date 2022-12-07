import React, { useState } from "react";


 function Cardleft(props){

  const [isclicked, setIscliked]=useState(false);

  
  const handlemouseover = ()=>{
    console.log('clicked')
    setIscliked(true);

    

  }
  const handlemouseout = ()=>{
    console.log('clicked')
    setIscliked(false);

    

  }
    
  



    return (
      <div>
        
        
      
      
        <div className="grid-child cardproject1">
            <div className="top" onMouseOver={handlemouseover} onMouseOut={handlemouseout}>
             
          
            <img
            src={props.imgURL}
            alt="avatar_img"
          />
        </div>
             <div className="bottom">
                <p>{props.name}</p>
                <p>{props.author}</p>
        </div>
      </div>
      <div className="projectinfo" >
          {isclicked && props.info }
        

        </div>
      
      </div>
      
      
      
    )
}
// function Cardright(props){
//   return (
//     <div className="float-container">
    
//       <div className="float-child cardproject2">
//           <div className="top">
        
//           <img
//           src={props.imgURL}
//           alt="avatar_img"
//         />
//       </div>
//            <div className="bottom">
//               <p>{props.name}</p>
//               <p>{props.author}</p>
//       </div>
//     </div>
//     </div>
    
    
//   )
// }
export {Cardleft};