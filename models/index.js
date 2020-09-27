const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://user:8819959982@cluster0.rbuke.mongodb.net/user?retryWrites=true&w=majority"

const db = async () => {
    try{
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("MongoDb is connected");
    }
    catch (error) {
        console.log(error);
    }
}

//connect database
db();