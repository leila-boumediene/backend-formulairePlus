const express = require("express");
const router = express.Router();

// import des models Certificate et Convention
const Certificate = require("../models/Certificate");
const Convention = require("../models/Convention");
const Student = require("../models/Student");

// créer l'étudiant que je vais créer dans Postman
router.post("/student/create", async (req, res) => {
  try {
    const student = await Student.findOne({ lastName: req.fields.lastName });
    if (!student) {
      if (req.fields.lastName) {
        const newStudent = new Student({
          // idStudent: req.fields.idStudent,
          email: req.fields.email,
          firstName: req.fields.firstName,
          lastName: req.fields.lastName,
        });
        await newStudent.save();
        res.status(200).json({
          idStudent: newStudent.idStudent,
          email: newStudent.email,
          firstName: newStudent.firstName,
          lastName: newStudent.lastName,
        });
      } else {
        res.status(400).json({ message: "Missing somthing" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/student/idStudent", async (req, res) => {
  try {
    const studentById = await Student.findById({
      lastName: req.fields.idStudent,
    });
    if (studentById) {
      res.status(200).json(studentById);
    } else {
      res.status(400).json({ message: "student doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // const {idStudent, firstName, lastName, email} = req.fields;

  // if(idStudent && firstName && lastName && email){
  //     const data ={
  //         form: '${idStudent}, ${firstName}, ${lastName}, ${email}',
  //         text:  'Bonjour ${lastName} ${firstName}, Vous avez suivi ${nbHours} de formation chez FormationPlus. Pouvez-vous nous retourner ce mail avec la piècejointe signée. Cordialement, FormationPlus'
  //     }
  //     res.json(data)
  // }else{
  //     res.status(400).json({ error: "une erreur s'est produite" });
  // }
});

module.exports = router;
