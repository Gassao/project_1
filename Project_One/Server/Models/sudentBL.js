
//   Row 1 and 2 => import --> config to Model
const sudentModel = require('./studentModel')
require('../config/db')

//  the function -- >  getAllStudents --> return all data from databases
const getAllStudents = () => {

    return new Promise((resolve, reject) => {
        sudentModel.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//  the function -- >  getStudentByid --> returns  by  id  from databases
const getStudentByid = (id) => {
    return new Promise((resolve, reject) => {
        sudentModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//    the function -- >  addStudent --> Add  items  in to  databases  
const addStudent = (obj) => {

    return new Promise((resolve, reject) => {
        const newStudent = new sudentModel(obj);

        newStudent.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Added sucessfully")
            }
        });
    });
};
//    the function -- >  updateStudent --> edite  items  from databases  

const updateStudent = (id, obj) => {

    return new Promise((resolve, reject) => {
        sudentModel.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Updated sucessfully")
            }
        });
    });
};
const updateExam = (id, obj, Id_exam) => {

    return new Promise((resolve, reject) => {
        sudentModel.findByIdAndUpdate({ _id: id, exams: { $elemMatch: { exam: { nameofexam, date, grade }, $set: { "exams.$.std": obj } } } })
        if (err) {
            reject(err)
        }
        else {
            resolve("UpdatedExam sucessfully")
        }
    });
}
// });
//     };
/*
db.students.updateOne(
   {
     _id: 5,
     grades: { $elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 } } }
   },
   { $set: { "grades.$.std" : 6 } }
)
 
 
*/


///   the function -- >  deleteIdStudent --> delete item  by  id  from databases
const deleteIdStudent = (id) => {

    return new Promise((resolve, reject) => {
        sudentModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Deleted sucessfully")
            }
        });
    });
};
/// => -- > Check if all functions work with databases



//const students = {fullname:"Poly Michael", email:"poly@gmail.com", faculty: "Cs" , birthdate: " 11/02/1900",exam:{nameofexam:"brWQ",date :"03/08/20001", grade:0} } //db  כל זה מדובר    
//  addStudent(students);// dbזה צריך להוסיף ב   
//// db  צריך לקחת  , id    רןצים לקחת 
//getStudentByid( '61b3b6bdba7d906ecc84f497');
//deleteIdStudent( '61b5051c0b172c452f8e4671');
//getAllStudents().then(  x=>console.log(x))
//updateStudent ( '61b3b6bdba7d906ecc84f497',students )
//getStudentByid('61b3b6bdba7d906ecc84f497' ).then( x=>console.log(x));
//updateCar('61aa5e082ef200469150e220',{ model:20, color:"brown", numofwheels:4} )
// updateExam({
//     _id: '61b3eca3a4d65ee3bcd8714c',
//     exam: [
//         { nameofexam: " bbbbbbbbbbb", date: "03/08/20001", grade: 000000 }

//     ]
// })

module.exports = { getAllStudents, getStudentByid, addStudent, updateStudent, deleteIdStudent, updateExam }//