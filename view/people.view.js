const express = require('express');
const app = express();
const User = require('../controller/people.controller');
const { verifyToken } = require('../middleware/autentication');

app.get('/get-people',verifyToken, User.getPeople);
app.post('/register-people', User.registerPeople);



//TERMINAR DELETE PEOPLE
app.delete('/delete-people:id',verifyToken, User.deletePeople);
//TERMINAR DELETE PEOPLE



app.post('/login-people', User.loginPeople)

module.exports = app;