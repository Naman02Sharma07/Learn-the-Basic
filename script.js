//expressjs setup 
//install✅
//express js boilderplate✅
      //go to npm✅
    //   search express✅
    // copy the code✅
//expressjs setup✅
      //install ejs✅
      //set view engine✅
      //create view folders✅
      //create ejs files✅
      //render ejs files inside route ✅
//express statis file setup✅
//architecture of public folder✅





const express = require('express')
const app = express()

app.set("view engine","ejs");//this is the way by which we set the view engine 
app.use(express.static("./public"))
app.get('/', function (req, res) {
  res.render("index")
})

app.listen(3000)


//everytime we create a neew project we have to create everything from the start instead of doing it again again we can do it 
//by the help of express genrator
//programmer life is about creating the thing more effectively 
//to crreate new thing 
