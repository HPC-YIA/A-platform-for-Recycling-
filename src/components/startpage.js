import React, { Suspense } from 'react';
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";

import Header from "./topsection";

import Earth from "./earth";
import Mars from "./mars";



const CanvasContainer =styled.div`
   position:relative;
   
   width:100%;
   height:100%;
  
   background-color:black; 
`;

export default function Start(){
    return (
      <CanvasContainer>
      <Header/>
    
      <Canvas>
        <Suspense fallback={null}>
          <Earth/>
          <Mars/>
        </Suspense>

        

      </Canvas>
    </CanvasContainer>
    
    
        
        
  
    );

}


