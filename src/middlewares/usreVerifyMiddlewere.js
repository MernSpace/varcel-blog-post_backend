var jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    let Token=req.headers['token'];
    jwt.verify(Token,"SecretKey1234567890",function (err,decoded) {
        if(err){
            console.log(Token)
            res.status(401).json({status:"unauthorized"})
        }
        else {
            let email=decoded['data'];
            console.log(`request create by ${email}`)
            req.headers.email=email
            next();
        }
    })
}
