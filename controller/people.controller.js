const User = require('../model/people.model');
const jwt = require('jsonwebtoken');

let login = false;
let tok = '';


let getPeople = (req, res) => {


    User.find({}).then((data)=>{
        res.json(data)
        console.log("token: " + tok);

    }).catch((err) => {
        console.log(err);
      });


    // res.send('Welcome')
};

let loginPeople = (req, res) => {

    
    let body = req.body;

    User.findOne({nombre: body.nombre})
        .then((data)=>{
            if(data != null){
                if(data.apellido === body.apellido){
                    let token = jwt.sign({
                        data
                    }, "sindata",{expiresIn: 60*60*24*1})
                    tok = token;
                    res.json({
                        status: 200,
                        token,
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
            nombre: body.nombre,
            apellido: body.apellido
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