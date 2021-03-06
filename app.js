const express=require("express")
const mongoose=require("mongoose")
const {MONGO_URL}=require('./keys')
const app=express();
const port= process.env.PORT || 5000
const host= '0.0.0.0'


require('./models/user')
require('./models/resume')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/resume'))
mongoose.connect(MONGO_URL)
mongoose.connection.on("connected",()=>{
    console.log("connected to MongoDB");

})

mongoose.connection.on("error",(e)=>{
    console.log("failed",e);

})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('frontend/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(port,host,()=>{
    console.log("Running at ",5000)
})

// LPXMhZkG1xngPHYD