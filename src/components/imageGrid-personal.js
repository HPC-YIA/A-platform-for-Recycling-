import React from "react";
import useFirestore from "./firebase/hooks/useFirestore";
const ImageGrid = ({setSelectedimg})=>{
    const {docs}= useFirestore('images');
    // console.log(docs);
    return (

        <div className='img-grid'>
            {docs &&docs.map(doc=>(
                <div className="ig-wrap" key = {doc.id} onClick={()=> setSelectedimg(doc.url)}>
                    <img src = {doc.url}/>
                </div>

            ))}
        </div>
    )
}

export default ImageGrid;