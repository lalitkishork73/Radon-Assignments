const document = require('../models/document');
const profile = require('../models/profile');
const { uploadfile } = require('../helpers/awsConnect');
const { uploadFiles } = require('../helpers/googleDrivestor');
const { isValidObjectId } = require('../helpers/utils');

const createDocument = async (req, res) => {
    try {
        // let files=req.files;

        let files = req.files;

        let createDocument = {};

        /*  if (files) {
                   if (files && files.length > 0) {
                      creatdata["photo"] = await uploadfile(files[0]);
                   } else {
                       return res
                       .status(400)
                       .send({ status: false, message: "Please Provide ProfileImage" });
                   }
               }  */

        createDocument["file"] = await uploadFiles(files[0]);

        const uploadedData = await document.create(createDocument);

        if (!uploadedData)
            return res.status(400).send({ status: false, message: "not able to uplaod document" });

        // const createdDocument = await document.create(files);
        // if (!createdDocument) {
        //     return res.status(400).send({ status: false, message: 'not able to create document' })
        // }
        return res.status(201).send({ status: true, message: 'document created', data: uploadedData });

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const getDocumentAll = async (req, res) => {
    try {

        const document = await document.find({ isDeleted: false });

        if (!document) {
            return res.status(404).send({ status: false, message: 'no single document found' });
        }

        return res.status(200).send({ status: true, message: 'bingo all data found', data: document });


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const getDocumentId = async (req, res) => {
    try {
        const docId = req.params.Id;

        if (!isValidObjectId(docId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid Id' });
        }

        const findoc = await document.findOne({ id_: docId, isDeleted: false });
        if (!findoc) {
            return res.status(404).send({ status: false, message: "document not found for getdata" })
        }

        return res
            .status(200)
            .send({ status: true, message: "succsess", data: findoc });



    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const deleteDocument = async (req, res) => {
    try {

        const docId = req.params.Id;

        if (!isValidObjectId(docId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid Id' });
        }

        const deleteDocument = await document.findOneAndUpdate({ id_: docId, isDeleted: false }, { isDeleted: true, deletedAt: new Date() }, { new: true });

        if (!deleteDocument)
            return res
                .status(404)
                .send({ status: false, message: "Book not found or Already Deleted" });
        return res
            .status(200)
            .send({ status: true, message: "Deleted", data: deleteDocument });


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}

module.exports = { createDocument, getDocumentAll, deleteDocument, getDocumentId };