
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
  });
  return p;
}
//no callbacks no then syntax
//writing async is necessary
async function main() {
  const value = await kiratsAsyncFunction();

  console.log(value);
}

main();
console.log("after main");
