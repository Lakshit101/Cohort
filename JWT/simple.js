const jwt=require('jsonwebtoken');
const value={
    name:'lakshit',
    accountnumber:'123123',
}
//sign is to generate the jwb ,after value write any string value
const token=jwt.sign(value,'secret');
console.log(token);
//to verify jwt
// const verifytoken=jwt.verify("  ","secret");

// console.log(verifytoken);