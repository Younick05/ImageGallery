const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({ 
    imageName:{
        type: String
    },
    imageData:{
        type: String
    }
});

userSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

const UploadImage = mongoose.model("UploadImage", userSchema)

module.exports = UploadImage;