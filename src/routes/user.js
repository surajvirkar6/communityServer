const express = require('express');
const router = express.Router();
const UserController = require('../controller/auth');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.logInUser);
router.post('/logout', UserController.logoutUser);
router.post('/updateUserData', UserController.updateUser);

module.exports = router;

// TODO:- Add user into the database and return the user object

/*

Register
post -> /register
checks the user data and add in db

Login
post -> /login
checks the user data and send token
post -> /logout
logout user

Update
post -> /updateUser 
update userdata

Delete
post -> /deleteUser 
delete user data
*/