'use strict';
const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/profileController');
const { createDocument, getDocumentAll, deleteDocument, getDocumentId } = require('../controllers/documentController');
const { authentication, authorization } = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/login', loginUser);

router.post('/uploadfile/:Id', authentication, createDocument);
router.get('/files', getDocumentAll);
router.get('/files/:Id', authentication, getDocumentId);
router.delete('/uploadfile/:Id', authentication, authorization, deleteDocument);

module.exports = router;