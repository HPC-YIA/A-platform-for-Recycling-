import React from "react";
import Navigation from "./navigation";
import Articles from "./articles";
import AddArticle from "./addArticles";
import Footer from "./footer";

export default function Group(){

    
    return (
        <div className="App">
            <Navigation/>
            <div className="trend-main">
                <div className="row postrow">
                    <div className="col-md-8"></div>
                        <Articles/>
        
                
                    <div className="col-md-4">
                        <AddArticle/>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}