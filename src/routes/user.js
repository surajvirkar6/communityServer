const express = require('express');
const router = express.Router();
const UserController = require('../controller/auth');

router.get('/', UserController.addUser);

module.exports = router;

// TODO:- Add user into the database and return the user object