import React,{ useState } from "react";

import {uploadBytesResumable,getDownloadURL,ref, getStorage} from "firebase/storage";
import {Timestamp, addDoc,collection,getFirestore} from "firebase/firestore"

import {toast} from "react-toastify";


export default function AddArticle(){
    const[formData, setFormData]=useState({
        title:"",
        description:"",
        image:"",
        createdAt:Timestamp.now().toDate(),
    });
    const[error,setError]=useState(0);
    const [progress,setProgress]=useState(0);


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    };
    const handleImageChange=(e)=>{
        setFormData({...formData,image:e.target.files[0]});
        
    };
    const handlePost =()=>{
        if (!formData.title || !formData.description){
            alert ('please fill the fields');
            return;
        }

    
        const storage=getStorage();
        const db=getFirestore()

        const storageRef1= ref(storage,`/images/${Date.now()}${formData.image.name}`);
        const uploadImage = uploadBytesResumable(storageRef1,formData.image);

        uploadImage.on('state_changed',(snapshot)=>{
        let percentage = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
        setProgress(percentage);
        
        },(error)=>{
        setError(error);
        console.log(error);
        }, ()=>{
            setFormData({
            title:"",
            description:"",
            image:"",

        });



        getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
            const articleRef =collection(db,'articles');
            addDoc(articleRef,{
                title:formData.title,
                description:formData.description,
                imageUrl:url,
                createdAt:Timestamp.now().toDate(),
            })
            .then(()=>{toast("Post successfully",{type:"success"});
            setProgress(null);
        }) .catch ((error)=>{
            toast("Error post",{type:"error"});
            

        });
        
            

        });
    }
    );
};

  
    




    


    return(
        <div className="border p-3 mt-3 bg-light createpost" style={{position:"fixed"}}>
        <h2 className="createposttitle">Create Post</h2>
        <div className='creatsection'>
        <label htmlFor="">Title</label>
        <input type="text" name ="title" className="form-control" value={formData.title}
            onChange={(e)=>handleChange(e)}
        />
        </div>
        <div className='creatsection'>

        <label htmlFor="">Description</label>
        <textarea name ="description" className="form-control description" value={formData.description}
            onChange={(e)=>handleChange(e)}
        />
        </div>
        <div className='creatsection'>

        <label htmlFor="">Image</label>
        <input type="file" name ="image" accept="image/*" className="form-control" 
            onChange={(e)=>handleImageChange(e)}
        />
        </div>
        

        <div className='creatsection'>
            <button className="form-control add-btn" onClick={handlePost}>Post</button>
        </div>


        </div>
    );
}