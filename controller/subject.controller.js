const Material = require('../model/material.model');
const jwt = require('jsonwebtoken');


let getSubject = (req, res) => {
    const subject = req.params.subject;
    const cant = parseInt(req.params.cant);

    Material.find({ subject: subject }).limit(cant).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Error al obtener los materiales.' });
    });
};

let loginPeople = (req, res) => {

    
    let body = req.body;

    User.findOne({nameUser: body.nameUser})
        .then((data)=>{
            if(data != null){
                if(data.password === body.password){
                    let token = jwt.sign({
                        data
                    }, "sindata",{expiresIn: 60*24*1})
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
                let token = jwt.sign({
                    data
                }, "sindata",{expiresIn: 60*24*1})
                res.json({
                    status: 200,
                    data,
                    token,
                    msg: "Success"
                })
            }).catch((err)=>{
                console.log(err);
            })

    }else{
        console.log("file exists");
    }

};

let deletePeople = (req, res) => {

    let id = req.params.id;
    User.findById(id)
        .then(data =>{
            // if(!data){
            //     return res.json({
            //         status: 400,
            //         msg: "Not Found!!!!!!!",
            //     })
            // }
            
        
            User.findByIdAndRemove(id)
             .then(data=>{
                if(data){
                    return res.json({
                        status:200,
                        msg: "Delete sucessful!"
                    })
                }
            })
            .catch((err)=>{
                if(err){
                    return res.json({
                        status: 500,
                        msg: "Delete Error",
                        err
                    })
                }
            })   
        })
        .catch((err)=>{
            if(err){
                return res.json({
                    status: 404,
                    msg: "Not found!!!!!!",
                    err
                })
            }
        })   
    }

    let editPeople = (req, res) => {

        let id = req.params.id;

        let dataUser = {
            nameUser: req.body.userName,
            password: req.body. password
        }


        User.findById(id)
            .then(data =>{
                if(!data){
                    return res.json({
                        status: 400,
                        msg: "Not Found!!!!!!!",
                    })
                }
                
            
                User.findByIdAndUpdate(id,dataUser,{new:true,runValidators:true})
                 .then(data=>{
                    if(data){
                        let token = jwt.sign({
                            data
                        }, "sindata",{expiresIn: 60*24*1})
                        res.json({
                            status: 200,
                            data,
                            token,
                            msg: "Success"
                        })
                    }
                })
                .catch((err)=>{
                    if(err){
                        return res.json({
                            status: 500,
                            msg: "Delete Error",
                            err
                        })
                    }
                })   
            })
            .catch((err)=>{
                if(err){
                    return res.json({
                        status: 404,
                        msg: "Not found!!!!!!",
                        err
                    })
                }
            })   
        }

module.exports = {
    editPeople,
    deletePeople,
    getSubject,
    registerPeople,
    loginPeople
}