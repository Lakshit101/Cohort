const express=require("express");
const app=express();
const port=3000;
app.get('/api/v1/getproduct',(req,res)=>{
    res.stats(200).json({
        length:product.length,
        data:product,
    });
});
    app.listen(3000,()=>
    {
        console.log('server is running');
    })
