const express = require("express");
const {request, response} = require("express");

const fitness = require("./new/fitness");
const mac = require("./new/mac");
const salon = require("./new/salon");
const shop = require("./new/shop");

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
app.get('/fitness', (request,response)=>{
    response.send(fitness)
})
app.get('/mac', (request,response)=>{
    response.send(mac)
})
app.get('/salon', (request,response)=>{
    response.send(salon)
})
app.get('/shop', (request,response)=>{
    response.send(shop)
})
app.listen(8000,()=>{
    console.log("8000 port")
})

