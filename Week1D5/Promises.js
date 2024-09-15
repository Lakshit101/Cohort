// let promise= new Promise((resolve, reject) =>{
//     console.log("i am a promise");
//     reject("Error 404 occured")
// });
// let d=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Hello World");
//     },3000) 
// });
// function callback(){
//     console.log(d);
// }
// console.log(d);
// d.then(callback);

// function lakshitAsyncFunction(){
//     let p= new Promise(function(resolve){
//         resolve("HI there");
//     });

//     return p;
// }
// const value=lakshitAsyncFunction();
// value.then(function(data){
//     console.log(data);
// })
// let d=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Hello World");
//     },3000) 
// });
// function callback(){
//     console.log(d);
// }
// console.log(d);
// d.then(callback);

// function lakshitAsyncFunction(){
//     let p= new Promise(function(resolve){
//         resolve("HI there");
//     });

//     return p;
// }
// const value=lakshitAsyncFunction();
// value.then(function(data){
//     console.log(data);
// })


// const getPromise =()=>{
//    return new Promise((resolve,reject)=>{
//         console.log(" I am a Promise");
//         reject("Error 404 occured")
//     })
// }
// let promise=getPromise();
// promise.then(()=>{
//     console.log("Promise resolved")
// })
// promise.catch(()=>{
//     console.log("Promise not resolved")
// })