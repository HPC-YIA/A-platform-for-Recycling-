import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import {Cardleft} from './card';
import {cardContentLeft} from './cardContent';

function createCardleft(project){
    return <Cardleft 
    key={project.key}
    imgURL={project.imgURL}
    name={project.name}
    author={project.author}
    info={project.info}    
    />


}
// function createCardright(project){
//     return <Cardright
//     key={project.key}
//     imgURL={project.imgURL}
//     name={project.name}
//     author={project.author}/>


// }

function Trend(){
    return (
        <div className='App'>
            <Navigation/>
            <div className='trend-main'>
                <h2 className='hometitle'>HOT PROJECTS (EXAMPLE)</h2>
                <div className='project-section'>
                <div className="grid-container">
                
      
                {cardContentLeft.map(createCardleft)}
                </div>
                
                
                
            </div>
            </div>
            <Footer/>
            </div>
        );
    }
export default Trend;