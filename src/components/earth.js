import React, {useRef} from "react";
import { OrbitControls ,Stars} from "@react-three/drei";
import Cloudsmap from "../assets/textures/2k_earth_clouds.jpg";
import Earthmap from "../assets/textures/8k_earth_daymap.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import {TextureLoader} from "three";
import * as THREE from "three";

export default function Earth(props){

  const[Cloud,Earth]=useLoader(TextureLoader,[Cloudsmap, Earthmap]);
  const earthref = useRef();
  const cloudref = useRef();
   useFrame(({clock})=>{
    const elapsedtime= clock.getElapsedTime();
    earthref.current.rotation.y= elapsedtime/6;
    cloudref.current.rotation.y= elapsedtime/6;
   })
    return <>
    (<mesh position={[-2,0,0]} ref={earthref}>
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
      <Stars 
        radius={300} 
        depth={70} 
        count ={10000} 
        factor={7}
        saturation={0}
        fade={true}
      / >
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[10,15,19]} angle={0.3}/>
      <pointLight color="#f6f3ea" position={0.6} intensity={1.5}/>
    

        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial color="red"/>
        <meshStandardMaterial  map={Earth} metalness={0.4} roughness={0.7} />
    </mesh>
    <mesh position={[-2,0,0]} ref={cloudref}>
      <sphereGeometry args={[1, 32, 32]}/>
      <meshPhongMaterial map={Cloud} 
      opacity={0.4} 
      depthWrite={true} 
      transparent={true} 
      side={THREE.DoubleSide}/>
        
    </mesh>
    );
    </>
}