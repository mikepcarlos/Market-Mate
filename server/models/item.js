const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema =  new Schema({
  title : String,
  quantity: Number,
  priority: Number,
  price : Number
});

mongoose.model('items', itemSchema);
