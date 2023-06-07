const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },

  lName: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },

  address: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },

  email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },

  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 2
  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;