const users = require("../Models/userModel")
const jwt=require('jsonwebtoken')

exports.userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existing=await users.findOne({email,password})
        if(existing){
            const token=jwt.sign({userId:existing._id},process.env.SECRETKEY)
            res.status(200).json({token,user:existing.username,profile:existing.profile,github:existing.github,linkedin:existing.linkedin})
        }
        else{
            res.status(406).json("Invalid email or password")
        }
    } catch(e){
        res.status(400).json(e)
    }
}

exports.userRegister=async(req,res)=>{
    try{
        const {username,password,email}=req.body
        const existing=await users.findOne({email})
        console.log(existing);
        if(existing){
            res.status(406).json("user alredy exists")
        }
        else{   
            const newUser=new users ({email,username,password,linkedin:"",github:"",prfile:""})
            await newUser.save()
            res.status(201).json("user signup completed")
        }
    }
    catch(e){
        console.log(e);
        res.status(404).json(e)
        
    }
    
}

exports.profileUpdate=async(req,res)=>{
    try{
        const userId=req.payload
        if(req.file){
            var{username,github,linkedin}=req.body
            var profile=req.file.filename
        }
        else{
            var{username,github,linkedin,profile}=req.body
        }
        const response=await users.findByIdAndUpdate(userId,{username,github,linkedin,profile})
        res.status(200).json(response)
    }
    catch(e){
        console.log(e);
        res.status(404).json(e)
    }
}