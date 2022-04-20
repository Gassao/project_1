    // -->import and creat Schema

const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const studentSchema = new Schema({

    fullname:String,
    email: String,
    faculty: String,
    birthdate:Date,
    exam :[
        {
        nameofexam: String,
        date:Date, 
        grade:Number
    }]
});

module.exports = mongoose.model('Students', studentSchema);