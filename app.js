//#---------------Initial Configurations start-----------------------
// require express
var express = require("express");

// require mongoose and create the mongoose variable
var mongoose = require('mongoose');

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// #-----------For handling post--------------
 var bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded());

// app.post('/result',function(request, response){
// 	console.log(response);
// });
// #-----------For handling get requests--------------------
// # 2. 
//app.get('/', function(req, res) {
//  res.render("index");
// })

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs');
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
 
  
//#---------------Initial Configurations end-----------------------

// http://localhost:8000/ home page rendering
app.get('/', function(request, response) {
  response.render("index");
});

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mangoose.schema({
	name: String,
	age : Number
})

 var user = mangoose.model('User',UserSchema);

// app.post('/users', function(request, response) {
//   console.log(request.body);
//   var User = new User({name:request.name,age:request.age})
// });

 

 
