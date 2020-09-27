const express = require("express");
const UploadImage = require("../models/upload.model");
const multer = require ('multer');
var router = express.Router();
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const imagePath = '../uploadimage/client/src/uploads/'
const unlinkAsync = promisify(fs.unlink)

//

// image storage
const storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,  './client/src/uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

//image filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}

//multer upload
const upload = multer ({
  storage: storage,
  limits:{
    files:1024*1024*5
  },
  fileFilter:fileFilter
});

//send image
router.post("/",  upload.single("imageData"), (req,res) => {
  console.log(req.body);
  const fileName = req.file.filename;
  const newImage = new UploadImage({
      imageName: fileName,
      imageData: req.file.path
  });

  newImage.save()
    .then( result => {
        console.log(result)
        res.status(200).json({
            success: true,
            document:result
        });
    })
    .catch(err => {
        res.send(err)
    })
    
})

//retrive images
router.get("/", (req, res) => {
    UploadImage.find({})
        .then( result => {
            console.log(result)
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

// Delete a Image with id
router.delete("/:id",(req, res) => {
  const id = req.params.id;

  UploadImage.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Image with id=${id}. Maybe Image was not found!`
        });
        
      } else {
        res.send({
          
          message: "Image was deleted successfully!"
        })
        unlinkAsync(imagePath+data.imageName) 
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Image with id=" + id
      });
    });
});





module.exports = router;