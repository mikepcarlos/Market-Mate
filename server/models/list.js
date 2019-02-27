const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema =  new Schema({
  items : [{
    name : String,
    price : Number
  }],
  timeLeft: Number
});

mongoose.model('lists', listSchema);
