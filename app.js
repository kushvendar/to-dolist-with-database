//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/Mern-project");


app.get("/", function(req, res) {

const day = date.getDate();

 

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
   
  } else {
   
  }
});

app.get("/work", function(req,res){
  
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
