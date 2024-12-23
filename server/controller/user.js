const User = require("../models/user")
const JWT_SECRET = "aditya_dev@secret"
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function handleCreateUser(req, res){
    try{
        const saltRounds = 10;
        const {name, email, password} = req.body;

        const checkUser = await User.findOne({email})
        if(checkUser){
            return res.json({success: false, message: "User Already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword 
        })

        const token = jwt.sign({
            email,
            password 
        }, JWT_SECRET)

        return res.json({success: true, message: "User Created Successfully", user: user, token: token});
    }catch(err){
        return res.json({success: false, message: "Error Creating User", error: err.message});
    }
}

async function handleLogIn(req, res){
    try{
        const {email, password} = req.body;
        const query = {
            email,
        }
        const getUsers = await User.findOne(query)
        if(!getUsers){
            return res.json({success: false, message: "User Not Found"});
        }

        const checkPass = await bcrypt.compare(password, getUsers.password);
        if(!checkPass){
            return res.json({success: false, message: "User Not Found"});
        } 

        const token = jwt.sign({
            email, 
            password
        }, JWT_SECRET)

        return res.json({success: true, message: "User Found", user: getUsers, token: token})

    }catch(err){
        return res.json({success: false, message: "Error Logging User", error: err.messsage});
    }
}

module.exports = {
    handleCreateUser,
    handleLogIn
}