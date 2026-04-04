const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

//@Desc Register user
exports.registerUser = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
    
    //check existing user
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message : "User Already Exists...!"});
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(password, salt);

    
    }
}