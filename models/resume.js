const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema.Types

const resumeschema=new mongoose.Schema({
    objective:{
        type:String,
    },
    education:[{
        type:String
    }],
    projects:[{
        type:String
    }],
    skills:[{
        type:String,
    }],
    location:{
        type:String,
    },
    experience:[{
        type:String
    }],
    website:{
        type:String
    },
    resumetype:{
        type:String
    },
    createdby:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})

mongoose.model("Resume",resumeschema)
