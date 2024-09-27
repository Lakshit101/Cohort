// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
const jwt = require('jsonwebtoken');
const jwtpassword="hi";
function verifyJwt(token){
    let ans =true;
    try{
        jwt.verify(token,jwtpassword);

    }catch(e){
      ans=false;
    }
    return ans;
}
const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGFrc2hpdCIsImFjY291bnRudW1iZXIiOiIxMjMxMjMiLCJpYXQiOjE3Mjc0MTUxNTZ9.NWue49FjjJRGYriwDF8RDnvPDFcW2gUavxsyvp_0yOA");
console.log(ans);