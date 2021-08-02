const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  idStudent: {
    unique: true,
    type: String,
  },
  firstName: String,
  lastName: String,
  email: String,
  Convention: { type: mongoose.Types.ObjectId, ref: "Convention" },
});

module.exports = Student;
