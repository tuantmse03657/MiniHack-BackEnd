var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('users',['userlist']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.get('/userlist', function (req, res) {
  console.log('I received a GET request');

  db.userlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
app.post('/userlist', function (req, res) {
  db.userlist.findOne({name:req.body.name}, function (err, doc) {
   if(doc == null){
     db.userlist.insert(req.body, function(err, doc) {
       console.log(doc);
     });
   }
   else res.send('conflict');
  });
});
app.post('/loginuser',function(req,res){
  db.userlist.findOne({name:req.body.name}, function (err, doc) {
   if(doc == null){
     res.send('wrongname');
   }
   else {
     db.userlist.findOne({name:req.body.name,password:req.body.password}, function (err, doc) {
      if(doc == null){
        res.send('wrongpassword');
      }
      else res.send('success');
     });
   }
  });
});
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
