const document = require('../models/document');

const createDocument = async (req, res) => {
    try {
        // let files=req.files;

        let files = req.body.files;


        const createdDocument = await document.create(files);
        if (!createdDocument) {
            return res.status(400).send({ status: false, message: 'not able to create document' })
        }
        return res.status(201).send({ status: true, message: 'document created', data: createdDocument });

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const getDocument = async (req, res) => {
    try { }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const deleteDocument = async (req, res) => {
    try { }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}

module.exports = { createDocument, getDocument, deleteDocument };