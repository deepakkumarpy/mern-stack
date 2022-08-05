import express from "express"
import cors from "cors"
import mongoose from"mongoose"


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/listenmusic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB Connected")
})

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number
})

const User = new mongoose.model("User",userSchema)

app.post("/login",(req,res)=>{
    const {name ,email ,password}=req.body
    User.findOne({email:email,name:name},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Sucessfull",user:user})
            } else{
                res.send({message:"password doesn't match"})
            }
        } else{
            res.send({message:"User not registered"})
        }
    })
})


app.post("/signin",(req,res)=>{
   const {name ,email ,password ,contact}=req.body

   User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User already registered"})
    }
    else{

        const user= new User({
            name,
            email,
            password,
            contact
           })
           user.save(err =>{
            if(err){
                res.send(err)
            } else {
                res.send({message:"Sucessfully Registered"})
            }
           })
    }
   })
})

app.listen(5000,()=>{
   console.log("BE started at post 5000")
})
