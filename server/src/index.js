'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
require('./database/mongoConnect');
const route = require('./routes/route');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());
app.use('/', route);
app.use('*', (req, res) => res.status(404).send({ status: false, message: "please enter valid URL" }))

app.listen(port, () => console.log(`Connected on Port ${port}`));


