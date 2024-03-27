const jwt = require("jsonwebtoken");
const userCreateToken= async (data) => {
    let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data}



    return await jwt.sign(Payload, 'SecretKey1234567890');
}
module.exports=userCreateToken