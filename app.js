const express = require('express');
const app = express();
const route = require('./route');

app.use(route);
app.get('/',async (req,res)=>{
    //console.log("This is root");
    //var resobj = await res.send("This is root from bla!!!!!");
    var resobj = await res.json({"msg":"This is root from bla!!!!!"});
});

app.listen(3000,(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log("Server connected");
})