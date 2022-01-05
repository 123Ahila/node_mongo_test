const express = require('express');
const router = express.Router();
const thing = require('./models/thing');


router.get('/showList',async(req,res)=>{
    res.send("This is show list");
});

module.exports = router;