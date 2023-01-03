'use strict';
const ObjectId = require('mongoose').Types.ObjectId;

const isValidRequestBody = (requestBody) => {
    return Object.keys(requestBody).length > 0;
}

const isValidObjectId = (objectId) => {
    if (!ObjectId.isValid(objectId)) return false;
    return true;
};

const isValid = (value) => {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length == 0) return false;
    return true;
}

const isvalidEmail = function (email) {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(email);
};

const isValidPassword = (password) => {
    let regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return regexPassword.test(password);
};

const isValidPhone = function (mobile) {
    let regex =
        /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([-]?)\d{3}([-]?)\d{4})$/;
    return regex.test(mobile);
};

module.exports = { isValidRequestBody, isValidObjectId, isValid, isvalidEmail, isValidPassword, isValidPhone }