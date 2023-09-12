const express = require('express');
const app = express();
const User = require('../controller/people.controller');


app.get('/get-people', User.getPeople);
app.post('/post-people', User.postPeople);

module.exports = app;