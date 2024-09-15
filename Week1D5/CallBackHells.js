//this is callbackhell
//to solve this promises sare introduce


function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    console.log("getting data 1...");
    getData(2,()=>{
        console.log("getting data 2...");
        getData(3,()=>{
            console.log("getting data 3...");
        });
    });
})