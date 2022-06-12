const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_KEY}=require('../keys')
const User=mongoose.model('User')

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.post('/signup',(req,res)=>{
    console.log(req.body)
    const {name,email,password,contact}=req.body
    if(!name||!email||!password||!contact){
        return res.status(422).json({error:"please add all field"})
    }
   
    User.findOne({email:email})
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:"User already exists"})
        }
        bcrypt.hash(password,13)
        .then(hassedpwd=>{
            // console.log(hassedpwd)
            
                    const user=new User({
                        name:name,
                        email:email,
                        contact:contact,
                        password:hassedpwd

                    })
            
                    user.save()
                    .then(user=>{

                        // const token=crypto.randomBytes(23).toString('hex')
                        // // console.log(token)

                        // user.token=token
                        // user.save().then(result=>{
                        //         transport.sendMail({
                        //         to:user.email,
                        //         from:"manoj2kbgm@gmail.com",
                        //         subject:"Welcome message",
                        //         html:`<h1>Welcome to Lovegram site, <p>Click on this <a href="${DOMAIN}/verify/${token}">Link</a> to verify your E-mail.</p> </h1>`
                        //     }).then(res=>{
                        //         console.log(res)
                        //         })
                        // })
                        res.json({message:"Created user"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
        })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(422).json({error:"Please fill all the fields"});
    }
    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser){
            return res.json("Invalid email or password")
        }
        bcrypt.compare(password,saveduser.password)
        .then(match=>{
            if(match){
                // res.json("You have signned in successfuly");
                // if(saveduser.verify==true){
                    const token=jwt.sign({_id:saveduser._id},JWT_KEY)
                    const {_id,name,email,contact}=saveduser;
                    res.json({message:"Signed in success",token:token,user:{_id,name,email,contact}})
                // }else{
                    // res.json({error:"Sign-up first"})
                // }
            }else{
                res.json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err)
    })
})




module.exports=router