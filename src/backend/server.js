const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes.js')

mongoose.connect('mongodb+srv://admin:netflixappclone@cluster0.5jme3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json())
app.use(routes)
app.listen(3333)