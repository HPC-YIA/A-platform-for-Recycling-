import React, { useState } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import ProgressBar from "./progressBar";
import ImageGrid from "./imageGrid-personal";
import Modal from "./img-model";

export default function Myaccount(){
    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);

    const types=['image/png','image/jpeg','video/mp4'];
    const changehandler = (e)=>{
        
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError('Please select a correct file (png, jpeg, mp4)');
        }
    }
    const [selectedimg, setSelectedimg]= useState(null);


    return (
        <div className="App">
        <Navigation/>
        <div className="trend-main">
            <h2 className="accountpost">Post your works</h2>
            <form className="accountform">
                <input type="file" onChange={changehandler}/>
                <div className="output">
                    {error&& <div className="error">{error}</div>}
                    {file&& <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
            <ImageGrid setSelectedimg={setSelectedimg}/>
            {selectedimg && <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg}/>}
            </div>
        <Footer />
        </div>
        
    );
};