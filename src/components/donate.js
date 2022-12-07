import React from "react";
import Navigation from "./navigation";
import Footer from './footer';
import CollectionRequest from './donaterequest';

export default function Donate(){
    return (
        <div className="App">
            <Navigation/>
            <CollectionRequest/>
            <Footer/>
        </div>
    )
}
