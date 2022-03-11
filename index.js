

const express = require('express');
const path = require("path");
const port=3000;
const app = express();

app.use=logger;

app.get("/books",function (req, res) {
    res.send({route:req.path})
    console.log({route:"/books"})
});


var route=route;

app.get("/libraries",checkPermission("librarian"),function (req, res) {
    res.send({route:req.path,permission:req.permission})
    console.log({route:"/libraries"})
});

app.get("/authors",checkPermission("authors"),function (req, res) {
    res.send({route:req.path,permission:req.permission})
    console.log({route:"/libraries"})
});



function logger(req, res,next) {
    console.log(req.params.name)
    next();
}

function checkPermission(user)
{
    return function(req, res, next) {
        if(req.path=="/libraries" || req.path=="/authors"){
            req.permission=true;
            next()
        }   
        else {
            req.permission=false;
            next()
        }
    }
}

app.listen(port,()=>{
    console.log(`listening directly on port: ${port}`);
})