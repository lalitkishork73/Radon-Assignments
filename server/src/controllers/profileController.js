const profile = require('../models/profile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { uploadFile } = require('../helpers/awsConnect');
const { isValidRequestBody, isValidObjectId, isValid, isvalidEmail, isValidPassword, isValidPhone } = require('../helpers/utils');

const createUser = async function (req, res) {
    try {
        let data = req.body;
        let files = req.files;

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: "Please provide user Details" });
        }
        let { name, password, email, phone, photo } = data;
        let creatdata = {}

        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "please provide valid name" });
        }
        creatdata["name"] = name;

        if (!isValid(email))
            return res
                .status(400)
                .send({ status: false, message: "Email-ID is required" });

        if (email) {
            const checkEmail = await profile.findOne({ email: email });

            if (!isvalidEmail(email))
                return res.status(400).send({
                    status: false,
                    message: "Invalid Email id. Ex: example12@gmail.com",
                });

            else if (checkEmail)
                return res.status(400).send({ status: false, message: `the ${email} should be unique it's already exist!` });
        }
        creatdata["email"] = email;

        if (!isValid(phone))
            return res
                .status(400)
                .send({ status: false, message: "Phone number is required" });

        const checkPhone = await profile.findOne({ phone: phone });
        if (phone) {

            if (!isValidPhone(phone))
                return res.status(400).send({
                    status: false,
                    message: "Invalid Phone number",
                });

            else if (checkPhone)
                return res.status(400).send({ status: false, message: `the ${phone} should be unique it's already exist!` });

        }
        creatdata["phone"] = phone;

        if (!isValid(password))
            return res
                .status(400)
                .send({ status: false, message: "please enter password" });

        if (password) {
            if (!isValidPassword(password))
                return res.status(400).send({
                    status: false,
                    message: "Invalid Phone number",
                });
            else if (password.length < 8 || password.length > 15)
                return res
                    .status(400)
                    .send({ status: false, message: "Password must be of 8-15 letters." });

            else {
                creatdata["password"] = await bcrypt.hash(password, 10);
            }
        }

        /*  if (files) {
             if (files && files.length > 0) {
                 let url = await uploadFile(files[0]);
             } else {
                 return res
                 .status(400)
                 .send({ status: false, message: "Please Provide ProfileImage" });
             }
         } */
        creatdata["photo"] = photo;

        let createdData = await profile.create(creatdata);
        if (!createdData) {
            return res.status(400).send({ status: false, message: "Try again" });
        }
        return res.status(201).send({ status: true, message: "success", data: createdData });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

const loginUser = async function (req, res) {
    try {
        let data = req.body;
        let { email, password } = data;

        

    }

    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { createUser, loginUser };
