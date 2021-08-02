const express = require("express");
const router = express.Router();

// import des modèles
const Student = require("../models/Student");
const Convention = require("../models/Convention");
const Certificate = require("../models/Certificate");

// création de la convention
router.post("/convention/create", async (req, res) => {
  try {
    // je check si l'étudiant existe
    const student = await Student.findOne(req.fields.lastName);
    if (student) {
      // si l'étudiant existe je lui associe une convention
      const newConvention = new Convetion({
        idConvention: req.fields.idConvention,
        lastName: req.fields.lastName,
        nbHours: req.fields.nbHours,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
