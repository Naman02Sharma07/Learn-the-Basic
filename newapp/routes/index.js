var express = require('express');
var router = express.Router();
const userModel = require("./users");





router.get('/',function(req,res){//we use router.get instead of the app.get because above we use the varable router 
  //we are not goona change it bcoz it will mess us the whole thing because the app has lready been used as var in the app.js 

  res.cookie("age",30);//this is thw way we store the cookies on the browser 


  req.session.ban = true;//the session goes in the form of a request because it has been stored on the backend that is on the server 
  //this means a session name ban has been stored in the server for a particular user and it get store the value true for it 
  res.render("index");
})


router.get("/readcookies",function(req,res){
  console.log(req.cookies);//this wil give the cookies 
  res.send("checked we get the cookie")
})

router.get("/deletecookies",function(req,res){
  res.clearCookie("age");
  res.send("yup we have delete the cookies ")
})


router.get('/checkban',function(req,res){
  console.log(req.session)//where ever you have use the session you can put or print in in any of the routes because it has been stored in the server 
  res.send("check if it is printing or not ")//this is to see if our session implement correctly or not
})


router.get("/removeban",function(req,res){
  req.session.destroy(function(err){//this is used to destroy the session that we stored in our session
    if(err) throw err;
    console.log(err);

    res.send("ban removed");
  })
})


router.get("/create",async function(req,res){//but the thing is the await that we used in the next line won't work if we don't use the async keyword 

//how do i know this is asynchrounour or not to know that i have read the documentaion 

  const createduser = await userModel.create({//this is the syncronous function that mean when we run the code wether it run or not we get the output of the next line that is the res.send
    //to make it work in the right way we put the await in front of it 
    username:"raj arora",
    user:"raj",
    age:21,
  });
  req.session.ban = true;//this meand a session name ban has been stored in the server for a particular user and it get store the value true for it 


  res.send(createduser)//this is the response that we get when we run the code 
})
//await don't work alone it has to work with the async so where do we put thw the async
//soo we put the async in front of the parent function of the function on which we are going to use the await 

router.get('/alluser',async function(req,res){
  let alluser = await userModel.find();//this find give us ll the user that we have in our database 
  console.log(alluser);
  res.send(alluser);//from here as a response we would get all the user that have been in our database 
})

router.get("/oneuser",async function(req,res){
  let user1 = await userModel.findOne({username:"Raj arora"});//this will be used to finc the username with the username raj arora

  res.send(user1);//this is the user that we get when we selected 
})

router.get("/delete",async function(req,res){
  let deleteduser = await userModel.findOneAndDelete({//this function is used to find the user and delete it from the database
    username:"Naman Sharma"
  })
  res.send(deleteduser);
})

module.exports = router;






/**now we go understand what is the meaning of the session and the cookies*/

//cookie                                                           session
//data store in the browser                                        //data store in the server
//data store on the frontend                                       //data store in the backend 
//there is some data that we want our browser to store             //there is some data that we want our server to store 
//we store the data because maybe in future we can again used that data
//this is not safe                                                 //it is not safe 
//it can be manipulated                                             //it cannot be manipulated 


//to create a seeion we req.session.session name 
// to destroy we use req.session.destroy