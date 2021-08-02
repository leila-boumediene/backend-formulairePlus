router.get("/attestion", async (req, res) => {
  try {
    //  je vérifie les Id de l'étudiant et de la convention
    // const student = await Student.findById(req.fields.idStudent);
    // const convention = await Convention.findById(req.fields.Idconvention);
    const certificate = await Certificate.find({
      owner: idStudent,
      idConvention,
    });

    console.log(certificate);
    res.json(certificate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
