 import express from "express"
 import cors from "cors"
 import mongoose from "mongoose"

 const app= express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

 mongoose.connect("mongodb://localhost:27017/form",{
    useNewurlParser:true,
    useUnifiedTopology:true
 },()=>{
    console.log("DB connected")
 })

 const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
 })

 const User= new mongoose.model("user",userSchema)


app.post("/login",(req,res)=>{
    const { email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "login Sucessfull" , user:user})
            } else{
                res.send({message:"password doesn't match"})
            }
        }else{
            res.send({message:" User not registerd"})
        }
    })
})

app.post("/register",(req,res)=>{
    const { name,email,password}=req.body
       User.findOne({email:email}, (err ,user)=>{
        if(user){
            res.send({message:"user already registered"})
        } else{
            
            const user = new  User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                } else{
                    res.send({ message: "suscessfully Registered, please login now"})
                }
            })
        }
    })
})
app.listen(8080,()=>{
    console.log("started at port 8080")
})
