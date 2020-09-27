const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
require('./models');


app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));

//app.use(express.static('/uploads'));

app.use(express.static(path.join(__dirname, 'uploads')));

const UploadImage = require('./routes/user.routes');
app.use('/api/user', UploadImage);

const Port = 5100;

app.listen( Port, () =>{
    console.log("Server Started");
})