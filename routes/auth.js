//create router register,login
const express =require('express');
const bycrypt=require('bycrytjs');
const jwt =require ('jsonwebtoken')
const User =require('../models/user');
const router =express.Router();

//create register
router.post('/register', async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user =new User ({username,password});
        await user.save();
        res.status(201).send('User registred successfuly');
    } catch (error){
        res.status(400).send(error.message)
    }
})

router.post('/login', async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user =await User.findOne({username:username});
        if (!user){
            return res.status(404).send('user not fount')
        }
        const isPasswordMatch=await bycrypt.compare(password,user.password);

        if (!isPasswordMatch){
            return res.status(401).send ('invalid password')
        }
        const token =jwt.sign({_id:user._id}, process.env.JWT_SECRET);
        res.send({token:token})
        
    }catch (err){
        res.status(400).send(err.message)
    }
});
module.exports=router;