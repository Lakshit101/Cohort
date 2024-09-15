const express=require('express');
const app = express();

const mongoose = require("mongoose")


 mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("mongodb connected");
 })
app.listen(3000,()=>{
    console.log("server is running");
})
// app.get('/', function(req, res){
//   res.send("hi");
// })