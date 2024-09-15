function asyncfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1" );
            resolve("success");
         
        },2000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2" );
            resolve("success 2");
         
        },2000)
    })
}
function asyncfunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 3" );
            resolve("success 3");
         
        },2000)
    })
}


console.log("fetching Data 1....");
let p1= asyncfunc();
p1.then((res)=>{
    console.log(res);
    console.group("fetching Data2...");
     let p2= asyncfunc2();
     p2.then((res)  =>{
        console.log(res);
        console.log("Fetching Data3....");
        asyncfunc3().then((res)=>{
            console.log(res);
        })
     })
});