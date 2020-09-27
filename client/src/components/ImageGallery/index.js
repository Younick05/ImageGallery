import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import userDataService from '../../services/user.dataService';
import './style.css';

const ImageGallery = (props) => {

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    
    

    useEffect(() => {
        retrieveImages();
    }, []);

    console.log(images) 
    const retrieveImages = () => {
        userDataService.getAll()
          .then(response => {
            setImages(response.data);
            
          })
          .catch(e => {
            console.log(e);
          });
          
    };


    const setActiveImage = (image, index) => {
        setCurrentImage(image);
        setCurrentIndex(index);
    };
    
    const deleteImage = () => {
      userDataService.remove(currentImage.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/");
        })
        .catch(e => {
          console.log(e);
        });
    };



  return(
    <div className="list-row">
        <div className="container">
            <h4 className="gallery-title">Image Gallery</h4>

            <ul className="group-list">
            {
                images.map((image, index) => (
                <li
                    className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveImage(image, index)}
                    key={index}
                >
                    {<img src={require("../../uploads/"+image.imageName)}  alt="uploaded data" className="process-image"/>}
                </li>
                ))}
            </ul>

        </div>
        <div className="container" id="image-details-container">
        {currentImage ? (
          <div>
            <h4>Image Details</h4>
            <div>
              <p>
                <strong>Image:</strong>
                {currentImage.imageName}{" "}
              </p>
              
              <p>
                <strong>Image Path:</strong>
                {currentImage.imageData}
              </p>
              
              <button className="badge badge-danger mr-2" onClick={deleteImage}>
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Image for Details...</p>
          </div>
        )}
      </div>
    </div>
   )

 }

export default ImageGallery