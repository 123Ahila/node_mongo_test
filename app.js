const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send("HEllo Wold");
});

app.listen(3000,(err)=>{
    if(err){
        console.log("Server not connected")
    }
    console.log("Server connected");
});

