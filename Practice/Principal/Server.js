const express = require('express');
const app = express();
const cors= require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));
app.get('/principal',(req,res)=>{
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);
    const principal = parseFloat(req.query.principal);
    const Totalamount=(principal*rate*time)/100;
    res.send(Totalamount.toString());
})
 
app.listen(3000)