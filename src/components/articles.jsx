import { useEffect, useState } from "react";
import useFirestore from "./firebase/hooks/useFirestore";
import React from "react";
import DeleteArticle from "./deleteArticles";




export default function Articles(){
    
    const {docs} = useFirestore('articles');
    console.log(docs);
    // const [articles, setArticles]=useState([]);
    // useEffect(()=>{
    //     const articleRef = collection('articles')
    //     .orderBy ("createdAt","desc")
    //     .onSnapshot((snapshot)=>{
    //         const articles=snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));

    //         setArticles(articles);
    // })
    // },[]);


    return (

        <div className="article-row">

            { docs.length===0?(
                <p>No articles found</p>):(

            
                    docs.map(({id,imageUrl,title,createdAt,description})=>(
                    <div className='border  mt-3 p-3 bg-light' key ={id}>
                        <div className='row '>
                        <div className="col-5">
                        <img src= {imageUrl} alt='img' style={{height:250,width:250}}/>

                        </div>
                        <div className="col-7">
                            <h2 className="posttitle">{title}</h2>
                            <p>{createdAt[0]}</p>
                            <h4 className="postdescription">{description}</h4>
                            <DeleteArticle id ={id} imageUrl={imageUrl}/>

                        </div>
                     </div>
                     
                     </div>)
            ))}
        </div>
    )

}
