'use strict';

// Database configuration

const url = process.env.MONGOLAB_URI;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect(url, {
    useNewUrlParser: true,
}).then(() => console.log("MongoDB Database Connected")).catch((err) => console.log(err));
