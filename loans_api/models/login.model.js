const mongoose = require("mongoose");
const schema = mongoose.Schema;

const loginSchema = new schema({
  username: String,
  password: String,
});

const loginModel = mongoose.model("Logins", loginSchema);

module.exports = loginModel;
