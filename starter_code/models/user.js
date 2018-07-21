const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isLaunderer: { type: Boolean, default: false },
  fee: { type: Number, default: null }
});

userSchema.set('timestamps', true);

userSchema.pre("save", function(next) {
  if(this.isModified("password")){
    bcrypt.genSalt(SALT_WORK_FACTOR)
    .then(salt => {
      return bcrypt.hash(this.password, salt)
    })
    .then(hash => {
      this.password = hash;
      next();
    })

    .catch(error => next(error))
  } else {
    next();
  }
})

userSchema.methods.checkPassword = function(password){
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
