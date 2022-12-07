import React from "react";

const Modal = ({selectedimg, setSelectedimg})=>{
    const handleClick=(e)=>{
        if (e.target.classList.contains('screendrop'))
        setSelectedimg(null);
    }


    return (

        <div className="screendrop" onClick={handleClick}>
            <img src={selectedimg} alt = "getlarge pic"/>
        </div>
    )
}

export default Modal;