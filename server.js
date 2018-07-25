var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server = http.Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/form', function(req, res){
  res.sendFile(__dirname+'/form.html');
});

app.post('/submit_user', function(req, res){
  console.log(req.body);
});

app.get('/system/about', function(req, res){
  res.sendFile(__dirname+'/about.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
})