// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
const jwt = require('jsonwebtoken');
const zod = require('zod');
 
const secret = "secret";  

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function sign(clientusername, clientpassword) {
    const usernameresponse = emailschema.safeParse(clientusername);
    const passwordresponse = passwordschema.safeParse(clientpassword);

    if (!clientusername || !clientpassword) {
        return null;
    }

    const signature = jwt.sign({
        clientusername
    }, clientpassword);
    return signature;
}

const ans = sign("lakshit@gmail.com", "12121212");
console.log("Generated Token:", ans);

 