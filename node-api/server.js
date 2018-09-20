var express = require('express');
var app = express();
var port = process.env.port || 1337;
var prodController = require('./Controller/ProductController')();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

console.log(prodController);
app.use("/api/products",prodController);

app.listen(port,function(){
    var datetime = new Date();
    var message = "sampleApp"
    console.log(port+message);
})