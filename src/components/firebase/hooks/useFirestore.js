import React from "react";
import {useState, useEffect} from "react";
import { projectfirestore } from "../config";


const useFirestore =(collection)=>{
    const [docs,setDocs]=useState([]);

    useEffect(()=>{

        const upload= projectfirestore.collection(collection)
            .orderBy('createdAt','desc')
            .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc =>{
                documents.push({...doc.data(),id:doc.id});
                
            });
            setDocs(documents);

        });
    return ()=> upload();
    },[collection])

    return {docs};

}

export default useFirestore;