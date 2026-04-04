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

    //Create user
    const user = await User.create({
        name, email, password : hashedPassword, role
    });

    res.status(201).json({
        _id : user._id,
        name : user.name,
        email : user.email,
        role : user.role,
        token : generateToken(user._id)
    });
    }
    catch(error){
        res.status(500).json({message : "Server Error"});
    }
};


//@ desc Login User
exportsloginUser = async (req, res) => {
    try{
        const {email, password } = req.body;

        const user = await User.findOne({email});

        //check user and password
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
               _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id) 
            });
        }
        //Invalid email or password
        else{

        }
    }
}