var express = require('express');
var router = express.Router();

router.get('/',function(req,res){//we use router.get instead of the app.get because above we use the varable router 
  //we are not goona change it bcoz it will mess us the whole thing 
  res.render("index");
})

module.exports = router;
