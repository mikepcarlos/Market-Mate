const mongoose = require('mongoose');
const { Schema } = mongoose;

const Item =  new Schema({
  title : String,
  quantity: Number,
  priority: Number,
  price : Number
});

mongoose.model('items', Item);
