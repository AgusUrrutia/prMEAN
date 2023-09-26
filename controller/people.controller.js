const User = require('../model/people.model');
const jwt = require('jsonwebtoken');


let getPeople = (req, res) => {

    console.log(req);
    User.find({}).then((data)=>{
        res.json(data)
    }).catch((err) => {
        console.log(err);
      });


    // res.send('Welcome')
};

let loginPeople = (req, res) => {

    
    let body = req.body;

    User.findOne({nameUser: body.nameUser})
        .then((data)=>{
            if(data != null){
                if(data.password === body.password){
                    let token = jwt.sign({
                        data
                    }, "sindata",{expiresIn: 60*60*24*1})
                    res.json({
                        status: 200,
                        token,
                        data,
                        msg: "Success"
                    })
                }else{
                    res.json({
                        status:400,
                        msg:"¡¡¡Password invalid!!!"
                    })
                }
            }else{
                res.json({
                    status:400,
                    msg:"¡¡¡User invalid!!!"
                })
            }

            
        }).catch((err)=>{
            console.log(err);
        })

    

};

let registerPeople = (req, res) => {

    if(!req.file){
        let body = req.body;
        console.log(body);

        let newUser = new User({
            nameUser: body.nameUser,
            password: body.password,
            email: body.email,
            role: "user"
        })
        
        newUser.save()
            .then((data)=>{
                res.json({
                    status: 200,
                    data,
                    msg: "Success"
                })
            }).catch((err)=>{
                console.log(err);
            })

    }else{
        console.log("file exists");
    }

};






module.exports = {
    getPeople,
    registerPeople,
    loginPeople
}