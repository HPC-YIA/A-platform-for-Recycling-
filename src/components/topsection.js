import React from "react";
// import styled from "styled-components";




// const framecontainer = styled.div`
// position:absolute;
// width:100%;
// height:100%;
// top:0;
// left:0;

// `;

// const heading =styled.h1`
// margin:200px;
// color:red;
// font-weight:400;
// font-size:25px;

// `;
export default function Header(){
    return (
        <div className="topsection">
            <div className="logotext">
            <h2 className="heading">RECYCLYING</h2> 
            <h4 className="post" ><a className="tp" href="/home">FIND OUT MORE</a></h4>
    </div>
            <div className="slogon">
                <h5>Can You See the Future of Our Planet?</h5>
            </div>
    </div>
    
    );
};