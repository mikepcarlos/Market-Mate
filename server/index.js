const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/list')

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/home')(app);

app.listen(5000);
