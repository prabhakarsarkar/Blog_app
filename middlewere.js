const jwt = require("jsonwebtoken");
function middle  (req,res,next){
    let decode = jwt.verify(req.headers.authorization,"raj")
    if(decode== 'prabhakar19@navgu.org'){
        next()
    }else{
        console.log('you are not admin');   
    }
}
module.exports = middle;