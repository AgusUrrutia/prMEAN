const express = require('express');
const app = express();
const Subject = require('../controller/subject.controller');
const { verifyToken } = require('../middleware/autentication');

app.get('get-material/cant/:subject/:cant',verifyToken, Subject.getSubject);
// app.post('/register-people', User.registerPeople);



// //TERMINAR DELETE PEOPLE
// app.delete('/delete-people/:id',verifyToken, User.deletePeople);
// //TERMINAR DELETE PEOPLE

// app.put('/edit-people/:id',verifyToken, User.editPeople);

// app.post('/login-people', User.loginPeople)

module.exports = app;