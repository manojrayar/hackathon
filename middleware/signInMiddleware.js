const jwt=require('jsonwebtoken')
const {JWT_KEY}=require('../keys')
const mongoose=require('mongoose')
const User=mongoose.model('User')

module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    console.log(authorization)
    
    if(!authorization){
        return res.status(401).json({error:"you must logIn first"})
    }
    const token=JSON.parse(authorization.replace("Bearer ",""))
    console.log(token)
    jwt.verify(token,JWT_KEY,(err,payload)=>{
        if(err){
            // console.log(err)
            return res.status(401).json({erro:"you must logIn first"})
        }

        const {_id}=payload
        User.findById(_id)
        .then(userdata=>{
            req.user=userdata

            next()
            
        }).catch(err=>{
            console.log(err)
        })

        

    })
}