'use strict';
const document = require('../models/document');
const profile = require('../models/profile');
const { uploadfile } = require('../helpers/awsConnect');
const { uploadFiles } = require('../helpers/googleDrivestor');
const { isValidObjectId, isValid } = require('../helpers/utils');

const createDocument = async (req, res) => {
    try {

        let files = req.files;
        let createDocument = {
            filename: files[0].originalname,
            filetype: files[0].mimetype
        };

        const email = req.params.Id;

        if (!isValid(email))
            return res
                .status(400)
                .send({ status: false, message: "Email-ID is required" });

        if (email) {
            const checkEmail = await profile.findOne({ email: email });

            if (!checkEmail) {
                return res.status(404).json({
                    status: false, message: "Try again"
                })
            }

            createDocument["user"] = checkEmail._id;

        }


        //using AWS S3 bucket

        /*  if (files) {
                   if (files && files.length > 0) {
                      creatdata["photo"] = await uploadfile(files[0]);
                   } else {
                       return res
                       .status(400)
                       .send({ status: false, message: "Please Provide ProfileImage" });
                   }
               }  */

        // Using Google Drive storage 

        let fileResponse;
        if (files && files.length > 0) {
            fileResponse = await uploadFiles(files[0]);
        }
        else
            return res
                .status(400)
                .send({ status: false, message: "Please Provide Document" });

        let DocUrl = "https://drive.google.com/uc?export=view&id=" + fileResponse;
        createDocument["file"] = DocUrl;

        const uploadedData = await document.create(createDocument);

        if (!uploadedData)
            return res.status(400).send({ status: false, message: "not able to uplaod document" });


        return res.status(201).send({ status: true, message: 'document created', data: uploadedData });

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const getDocumentAll = async (req, res) => {
    try {

        const documents = await document.find({ isDeleted: false });

        if (!documents) {
            return res.status(404).send({ status: false, message: 'no single document found' });
        }

        return res.status(200).send({ status: true, message: 'bingo all data found', data: documents });


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }

}
const getDocumentId = async (req, res) => {
    try {
        const docId = req.params.Id;

        /*  if (!isValidObjectId(docId)) {
             return res.status(400).send({ status: false, message: 'Please provide valid Id' });
         } */

        if (!isValid(docId))
            return res
                .status(400)
                .send({ status: false, message: "please Prvide valid Params" });

        const user = await profile.findOne({ email: docId });

        if (!user) {
            return res.status(404).send({ status: false, message: "Id does not exist" })
        }

        const findoc = await document.find({ user: user._id, isDeleted: false });
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
            return res
                .status(400)
                .send({ status: false, message: "please Prvide valid Object Id" });
        }


        const deleteDocument = await document.findOneAndUpdate({ _id: docId, isDeleted: false }, { isDeleted: true, deletedAt: new Date() }, { new: true });

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