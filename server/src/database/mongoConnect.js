'use strict';

// Database configuration

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/AssingmentDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }).then(() => console.log("MongoDB Database Connected")).catch((err) => console.log(err));

