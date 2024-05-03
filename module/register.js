const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  mobilenumber: {
    type: Number,
  },
  username: {
    type: String,
  },
})
user.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  user.methods.isPasswordMatched = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
  };

module.exports = mongoose.model("user", user);


