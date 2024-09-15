//map

// const input=[1,2,3,4];
// const ans=input.map(function(i){
//   return i*2;
// })
// console.log(ans);


//filter
// const arr=[1,2,3,4];
// const newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// const arr=[1,2,3,4];
// function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const ans=arr.filter (filterLogic);


const arr=[1,2,3,4];
const ans=arr.filter(function(n){
    if(n%2==0){
                return true;
            }
            else{
                return false;
            }
})
console.log(ans);