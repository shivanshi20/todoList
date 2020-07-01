const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
//adding parentheses on date() so that the function of getDate is logged into the console.log
// console.log(date());

const app = express();
//create a views folder after setting up this line of code


let items = [];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//struggle is real in attaching the css file
//  <link rel="stylesheet" href="/css/styles.css"> in ejs file.
app.use(express.static(__dirname + "/public"));

//use static files like css and images in the html pages.
//loads of problem in loading the css.

//imp to use bodyparser to post
app.get("/", function(req, res) {
  // let today = new Date();
  // let options = {
  //
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };
  //
  // let day = today.toLocaleDateString("en-US", options);


//dynamic functionality of the exports module.
  let day = date.getDate();

  res.render("list", {
    ListTitle: day,
    newlistItems: items,
    route: "/"
  });
});

app.get("/work", function(req, res) {

  res.render("list", {
    ListTitle: "WorkList",
    newlistItems: workItems,
    route: "/work"
  });
});

app.get("/about", function(req, res) {
  res.render("about");

});


app.post("/", function(req, res) {

  let item = req.body.newItem;

  items.push(item);
  res.redirect("/");


  //to Add the value of new item through redirect and root route.

});


app.post("/work", function(req, res) {
  let item = req.body.newItem;
  //     //to Add the value of new item through render and root route.
  workItems.push(item);

  res.redirect("/work");
});



app.listen(3000, function() {

  console.log("Server is running");
});



//9c65ed1df299f4faa2bea8cc763361ea-us10
//22fe9007d1
