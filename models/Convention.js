const mongoose = require("mongoose");

const Convention = mongoose.model("Convention", {
  idConvention: {
    unique: true,
    type: Number,
  },
  lastName: String,
  nbHours: Number,
  Student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
});

module.exports = Convention;
