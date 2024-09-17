 function findsum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
    function findtill100(){
      console.log( findsum(100));
    }
    setTimeout(findtill100,1000);
    console.log("Hello world");
 