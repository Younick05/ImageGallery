import React, { useState, useEffect } from "react";
import userDataService from "../../services/user.dataService";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const AddImage = (props) => {

    const [multerImage, setMulterImage] = useState([]);

    useEffect(() => {
        setMulterImage()
    }, []);

    const uploadImage = (e) => {
        var data = new FormData();
        data.append("imageName", Date.now());
        data.append("imageData", e.target.files[0]);
        console.log(data);
        setMulterImage(URL.createObjectURL(e.target.files[0]));
    
        userDataService.upload(data)
          .then(data => {
            if(data.data.success){
              alert("image uploaded successfully");
              setMulterImage("multer");
              console.log(data);
            }
          })
    };

  

  return(
    <div className='form-container'>
        <form encType="multipart/form-data" >
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" name="imageData" onChange={uploadImage}/>
                <label class="custom-file-label" for="customFile">Choose file</label>
                <br/>
                <br/>
                <br/>
                {multerImage ? (<img src={multerImage} alt="uploaded data" className="process-image"/>) : null} 
               
            </div>
        </form>  
    </div>
   )

 }

export default AddImage