const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const pageContacts = require("./new/fitness")
const pageContacts1 = require("./new/mac")
const pageContacts2 = require("./new/salon")
const pageContacts3 = require("./new/shop")
app.use(bodyParser.urlencoded({extended:false}))
app.get('/fitness', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts)
    response.json(student)
})
app.get('/mac', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts1)
    response.json(student)
})
app.get('/salon', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts2)
    response.json(student)
})
app.get('/shop', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts3)
    response.json(student)
})
app.listen(8000,()=>{
    console.log("8000 port")
})