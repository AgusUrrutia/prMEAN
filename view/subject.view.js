const express = require('express');
const app = express();
const Subject = require('../controller/subject.controller');
const { verifyToken } = require('../middleware/autentication');

app.get('/get-material/:subject/:cant', Subject.getSubject);
app.get('/get-material/:subject', Subject.getAllSubject);
// app.post('/register-people', User.registerPeople);



// //TERMINAR DELETE PEOPLE
// app.delete('/delete-people/:id',verifyToken, User.deletePeople);
// //TERMINAR DELETE PEOPLE

// app.put('/edit-people/:id',verifyToken, User.editPeople);

// app.post('/login-people', User.loginPeople)

module.exports = app;