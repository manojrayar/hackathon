const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Resume=mongoose.model('Resume')
const bcrypt=require('bcryptjs')
const signInMiddleWare=require('../middleware/signInMiddleware')

router.post('/createresume',signInMiddleWare,(req,res)=>{
    // res.json(req.user)
    const {objective,education,projects,skills,location,experience,website,resumetype}=req.body;
    // console.log(title,body,pic);
    if(!objective||!education){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    // console.log(req.user)
    // res.send("ok")
    
    req.user.password=undefined
    const resume=new Resume({
        objective:objective,
        education:education,
        projects:projects,
        skills:skills,
        location:location,
        experience:experience,
        website:website,
        resumetype:resumetype,
        createdby:req.user

    })
    resume.save().then(saveddata=>{
        res.json(saveddata)
    })
})

router.get('/myresume',signInMiddleWare,(req,res)=>{
    // Resume.find()
    // .populate("createdby","_id name email contact")
    // .sort("-updatedAt")
    // .then(result=>{
    //     res.json({resume:result})
    // })
    // .catch(e=>{
    //     console.log(e)
    // })

    Resume.find({createdby:req.user._id})
    .populate("createdby","_id name email contact")
    .sort("-updatedAt")
    .then(result=>{
        res.json({resume:result})
    })
})

router.get('/resume/:id',signInMiddleWare,(req,res)=>{
    // console.log(req.params.id)
    Resume.findOne({_id:req.params.id})
    .populate("createdby","_id name contact email")
    .then(resume=>{
            res.json(resume)
        }).catch(err=>{
            res.status(422).json({error:err})
        
    }).catch(err=>{
        res.status(404).json({error:"Resume not found"})
    })
})

router.get('/resumeb/:id',signInMiddleWare,(req,res)=>{
    // console.log(req.params.id)
    Resume.findOne({_id:req.params.id})
    .populate("createdby","_id name contact email")
    .then(resume=>{
            res.json(resume)
        }).catch(err=>{
            res.status(422).json({error:err})
        
    }).catch(err=>{
        res.status(404).json({error:"Resume not found"})
    })
})

module.exports=router