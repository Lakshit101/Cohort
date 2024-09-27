const express=require('express');
const app= express();

function isOldEnoughMiddleware(req, res, next) {
    const age=req.query.age;
    if(age>18){
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not eligible for this ride"
        })
    }
}

app.use(isOldEnoughMiddleware );
app.get('/ride1', (req,res )=>{
    res.json({
        msg:"Ride 1 is available"
    })
})
app.get('/ride2', (req,res)=>{
    res.json({
        msg:"Ride 2 is available"
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});