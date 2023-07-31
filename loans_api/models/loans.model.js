const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
  loanType: String,
  loanName: String,
  loanAmount: Number,
  loanIssueDate: Date,
  loanStatus: String,
});

const loanModel = mongoose.model("Loans", loanSchema);

module.exports = loanModel;
