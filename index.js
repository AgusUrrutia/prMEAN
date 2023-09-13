// REQUERIMIENTOS //////////////////////////////////////////////////////////////////

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//----------------------------------------------------------------//

const app = express();

////////////////////////////////////////////////////////////////////////
// CONEXION A LA BASE DE DATOSSSS
// mongoose.connect('mongodb://127.0.0.1:27017/apirest',{useNewUrlParser: true,useUnifiedTopology: true});
////////////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(fileUpload())


app.use(require('./view/people.view'));
mongoose.connect('mongodb+srv://agusdv:agusdv@cluster0.xzlxyql.mongodb.net/')
  .then(() => console.log('Connected!'));
////////////////////////////////////////////////////////////////
//SCHEMA
let Schema = mongoose.Schema;

let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true,"El nombre es obligatorio"]
    },
    apellido: {
        type: String,
        required: [true,"El apellido es obligatorio"]
    }


})




// const User = mongoose.model("personas",userSchema)

//PETICIONES GET MAAANNNNN/////////////////////////////////////////////
app.get('/', (req, res) => {


    User.find({}).then((data)=>{
        res.json({
            status: 200,
            data
        })

    }).catch((err) => {
        console.log(err);
      });


    // res.send('Welcome')
});
///////////////////////////////////////////////////////////////////////


app.listen(4000,()=>{
    console.log("listening on port 4000");
})