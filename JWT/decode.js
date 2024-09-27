// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

const jwt = require('jsonwebtoken');
function decodedJwt(token){
const decoded=jwt.decode(token);
   if(decoded){
    return true;
   }
   else{
  return  false;
   }
}
console.log(decodedJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGFrc2hpdCIsImFjY291bnRudW1iZXIiOiIxMjMxMjMiLCJpYXQiOjE3Mjc0MTQyMjR9.zdQqq5HTRRPzVMxiOuSWx5QPpChitgww3E6i96HMGWo"))