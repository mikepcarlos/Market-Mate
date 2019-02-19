const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./routes/home')(app);

app.listen(5000);
