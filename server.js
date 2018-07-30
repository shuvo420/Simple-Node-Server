var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server = http.Server(app);
var mongo=require('mongodb');
//for local
//var db, uri="mongo://localhost:27017";
//for c9
var db, uri="mongodb://"+process.env.IP+":27017"

mongo.MongoClient.connect(uri,
{useNewUrlparser: true},
function(err, client){
    if(err){
        console.log("could not connect to mongodb");
    }
    else{
        db=client.db('simple-node');
    }
}
);
var save= function(form_data){
    db.createCollection('users', function(err, collection){});
    var collection =db.collection('users');
    collection.save(form_data);
}

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/form', function(req, res){
  res.sendFile(__dirname+'/form.html');
});

app.post('/submit_user', function(req, res){
  console.log(req.body);
  save(req.body);
  res.status()
});

app.get('/system/about', function(req, res){
  res.sendFile(__dirname+'/about.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
})