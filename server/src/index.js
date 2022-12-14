'use strict';
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
require('./database/mongoConnect');
const route = require('./routes/route');
const cors = require('cors');

/* const os = require('os');
const cluster = require('cluster');

const cpunum = os.cpus().length;
console.log(cpunum);

if (cluster.isPrimary) {
    for (let i = 0; i < cpunum; i++) {
        cluster.fork();
    }
    cluster.on('exit', () => {
        cluster.fork();
    })
} else { */

    const app = express();
    const port = process.env.PORT || 3001;

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(multer().any());
    app.use('/', route);
    app.use('*', (req, res) => res.status(404).send({ status: false, message: "please enter valid URL" }))

    app.listen(port, () => console.log(`Connected on Port ${port}`));

// }




