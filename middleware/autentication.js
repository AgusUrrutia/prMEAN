const jwt = require('jsonwebtoken');


let verifyToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token,"sindata", (err,decoded) => {
        if (err){
            return res.json({
                status: 401,
                err
            })
        }
        req.nameUser = decoded.nameUser;
        next();
    });
};




module.exports = {
    verifyToken
};