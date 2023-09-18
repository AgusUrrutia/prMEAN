const User = require('../model/people.model');


let getPeople = (req, res) => {


    User.find({}).then((data)=>{
        res.json({
            data
        })
        console.log("PETICION!!!!!");

    }).catch((err) => {
        console.log(err);
      });


    // res.send('Welcome')
};

let postPeople = (req, res) => {

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
    postPeople
}