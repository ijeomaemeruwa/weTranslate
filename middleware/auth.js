//Middleware to perform validation check on generated token
const jwt = require("jsonwebtoken")

module.exports.verifyToken = async function (req, res, next){
    const token = req.header('Authorization')
    // console.log(token);
    if(token === undefined || token === ""){
        return res.status(401).json({error: 'Access Denied, please log in'});
    }else{
        try{
            const {info} = await jwt.verify(token, process.env.JWT_SECRET)
            if(!info){
                return res.status(401).json({error: 'Access Denied'})
            }
            req.user = info
            next()
        }catch(err){
            console.log(err);
            res.status(400).send({error: 'invalid token'})
        }
    }
}