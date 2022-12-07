import React from "react";
import {getStorage, deleteObject,ref} from "firebase/storage";
import {deleteDoc,doc,getFirestore} from "firebase/firestore"

import {toast} from "react-toastify";

export default function DeleteArticle({id,imageUrl}){

    const storage=getStorage();
    const db=getFirestore()
    const handleDelete = async()=>{
        try{
            await deleteDoc(doc(db,"articles",id))
            toast("Post deleted",{type:"success"})
            const storageRef1= ref(storage,imageUrl)
            await deleteObject(storageRef1)

        } catch (error){
            toast("Error for deleting",{type:"error"})
            console.log(error)

        }
        
    }

    return (
        <div className="deletesection">
            <button className="delete-btn" onClick={handleDelete}> Delete</button>
        </div>
    )
};