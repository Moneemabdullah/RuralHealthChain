const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken = (user) =>{
    return jwt.sign(
        {
            id: user._id,
            nid: user.nid,
            role: user.role,
            zilla: user.zilla
        },
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
    );
};

module.exports = generateToken;