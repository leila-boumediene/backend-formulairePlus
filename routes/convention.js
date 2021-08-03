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
    const idStudent = await Student.findOne(req.fields.idStudent);
    if (idStudent) {
      // si l'étudiant existe je lui associe une convention
      const newConvention = new Convetion({
        idConvention: req.fields.idConvention,
        lastName: req.fields.lastName,
        nbHours: req.fields.nbHours,
      });
      await newConvention.save();
      res.status(200).json({
        idConvention: req.fields.idConvention,
        lastName: req.fields.lastName,
        nbHours: req.fields.nbHours,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/convention/idConvention", async (req, res) => {
  try {
    const conventionById = await Convention.findById(req.fields.idConvention);
    if (conventionById) {
      res.status(200).json(conventionById);
    } else {
      res.status(400).json({ message: "somthing wrong" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
