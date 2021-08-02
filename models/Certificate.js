const mongoose = require("mongoose");

const Certificate = mongoose.model("Certificate", {
  idCertificate: Number,
  Student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  Convention: { type: mongoose.Schema.Types.ObjectId, ref: "Convention" },
  message: String,
});

module.exports = Certificate;
