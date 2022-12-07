import React from "react";
import { OrbitControls ,Stars} from "@react-three/drei";
import Marsmap from "../assets/textures/8k_mars.jpg";

import { useLoader } from "@react-three/fiber";
import {TextureLoader} from "three";

export default function Mars(props){

  const[Mars]=useLoader(TextureLoader,[Marsmap]);
    return <>
    (<mesh position={[2,0,0]}>
    <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={1.5}
        maxDistance={5}
      />
     
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[10,15,19]} angle={0.3}/>
      <pointLight color="#f6f3ea" position={[2,0,2]}  intensity={0.5}/>
    

        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial color="red"/>
        <meshStandardMaterial  map={Mars} metalness={0.4} roughness={0.7} />
    </mesh>
    );
    </>
}