const express=require('express');
const app=express();
const port=3000;
 app.get('/healthcheckup',function(req,res){
   const kidneyId=req.query.kidneyId;
   const username=req.headers.username;
   const password=req.headers.password;

   if(username!="lakshit"&& password!="pass"){
    res.status(403).json({
        msg:"User dosent exist",
    });
    return;
   }
   if(KidneyId!=1 && KidneyId!=2){
    res.status(400).json({
        msg:"Invalid kidneyId",
    });
    return;
   }
   res.json({
    msg:"your heart is healthy"
   })
 });
 app.listen(3000);