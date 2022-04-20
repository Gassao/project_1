
//   Row 2 and 4 => import -->  Model to Routers
const express = require('express')
const studentBL = require('../Models/sudentBL')

const router = express.Router()


//--> All functions route the entire route


// -->This function returns all objects
router.route('/').get(async (req, res) => {

   
  //  בחלק זה בודקים בפוסטמן 
    try
    {
        const students = await studentBL.getAllStudents()
        return res.json(students);
    }
    catch(error)
    {
        return res.json(error);
    }
})
// This function returns by id  object
router.route('/:id').get(async (req, res) => {
    try{
        const id = req.params.id;
        const student = await studentBL.getStudentByid( id);
        return res.json(student)
    }   catch(error){
        return res.json(error);
    }
})
// --> This function adds objects to databases
router.route('/').post(async (req, res) => {

 
    try{
        const id = req.params.id;
        const newStudent = req.body;
        const result = await studentBL.addStudent(newStudent);
        return res.json(result)
         
    }   catch(error){
        return res.json(error);
       
    }
})
//   --> This function edite( update) by id  from  databases 
router.route('/:id').put(async (req, res) => {
    try{
        const id = req.params.id;
        const updateStudent= req.body;
        const result = await studentBL.updateStudent(id, updateStudent);
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
})
 router.route( '/:id','id_exam').put(async(req,res)=>{
const id=req.params.id;
try{
const id_exam=params.id_exam;
const updateExams=req.body;
const result =await studentBL.updateExam( id,id_exam,updateExams);
return res.json(result)
} 
  catch(error){
    return res.json(error);
}

 })
//   --> This function delete  by id  from  databases 
router.route('/:id').delete(async (req, res) => {
    try{
        const id = req.params.id;
        const result = await studentBL.deleteIdStudent(id);
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
});

module.exports = router;