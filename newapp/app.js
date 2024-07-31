var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({//this is for storin the data on the server 
  resave: false,//if there in no chnage in value of the sesiion then don't save 
  //this will reduce the load on the server that's why we keep it as false 

  saveUninitialized:false,//it means there is some data that you don't want your server to store 
  //this also reduce the load on your server that's why we keep it as false 

  secret:"naman"//this is the secret string on which our data would be encrypted in the database
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



/**now we go understand what is the meaning of the session and the cookies*/

//cookie                                                           session
//data store in the browser                                        //data store in the server
//data store on the frontend                                       //data store in the backend 
//there is some data that we want our browser to store             //there is some data that we want our server to store 
//we store the data because maybe in future we can again used that data
//this is not safe                                                 //it is not safe 
//it can be manipulated                                             //it cannot be manipulated 

//install the session
//express-session
