// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


/**from here i am now gonna create my database for my project so see how thing s work here */

//install mongoose
//require setup and connection
//make schema
//create model and export 


const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017")//this allow us to connect the node to the mondodb by the help of mongoose 
//the above ip is the default ip of the server 
//12.0.0.1 this is he ip 
//27017 this is the port number

//now we create a schema 

const userschema = mongoose.Schema({
  username:String,
  age:Number,
  name:String
})

module.exports = mongoose.model("user",userschema);//this is now we create a modal but write now it is empty
//top put things we use above schema thing to export the thing 