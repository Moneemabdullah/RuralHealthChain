const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.registerUser = async(req, res) => {
    try{
        const {nid, name, phone, password, zilla, role} = req.body;

        const userExists = await User.findOne({nid});
        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }

        const user = await User.create({nid, name, phone, password, zilla, role})
        res.status(201).json({
            message: 'Registered successfully',
            user: {
                id: user._id,
                nid: user.nid,
                role: user.role
            },
            token: generateToken(user)
        })
    }
    catch(err){
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
}


exports.loginUser = async (req, res) =>{
  try {
    const {nid, password} = req.body;

    const user = await User.findOne({ nid });
    if(!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        nid: user.nid,
        role: user.role
      },
      token: generateToken(user)
    });
  } 
  catch(err){
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
  
};