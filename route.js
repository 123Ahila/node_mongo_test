const express = require('express');
const router = express.Router();

router.get('/welcome',async(req,res)=>{
    await(res.json('{"Msg":"Welcome To Route"}'))
});

router.get('/getlistdata',async(req,res)=>{
    await(res.json('{"Msg":"Get list data"}'))
});

