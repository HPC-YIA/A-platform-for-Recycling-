
import { async } from "@firebase/util";
import {useState, useEffect} from "react";
import { projectstorage, projectfirestore, timestamp } from "../config";



const useStorage = (file)=>{
    const[progress,setProgress]= useState(0);
    const[error,setError]=useState(null);
    const[url,setUrl]=useState(null);
    
    // set file into storage
    useEffect(()=>{
        const storageRef = projectstorage.ref(file.name);
        const collectionRef = projectfirestore.collection("images");


        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/ snap.totalBytes)*100;
            setProgress(percentage);
        },(error)=>{
            setError(error);

        },async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url,createdAt});
            setUrl(url);

        })
    },[file]);
    return {progress, url, error}
    
    
}



export default useStorage;