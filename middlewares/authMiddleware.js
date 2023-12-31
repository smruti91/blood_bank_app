const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) =>{
    try {
       // console.log(req.headers["authorization"]);
          //const token = req.headers["authorization"].split(" ");
          const token = req.headers["authorization"].split(" ")[1];
         // console.log(token);
          JWT.verify(token, process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                res.status(401).send({
                    success: false,
                    message: 'Auth Failed',
                    err
                 })
            }else{
                req.body.userId = decode.userId
                next();

            }
          })
    } catch (error) {
     console.log(error)   
     res.status(401).send({
        success: false,
        message: 'Auth Failed',
        error
     })
    }
}