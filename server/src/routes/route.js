const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/profileController');
const { createDocument, getDocument, deleteDocument } = require('../controllers/documentController');
const { authentication,authorization } = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/login', loginUser);

router.post('/uploadfile',authentication, createDocument);
router.get('/uploadfile',authentication, getDocument);
router.delete('/uploadfile/:Id',authentication,authorization, deleteDocument);

module.exports = router;