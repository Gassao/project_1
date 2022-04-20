
// --> create connection from data base

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/studentDB")
.catch(error => console.log(error))