const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/list')

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require('./routes/home')(app);
require('./routes/newItem')(app);

app.listen(5000);
