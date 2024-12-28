const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const userController = require('../controllers/userController');

router.post("/register",[
    body('email').isEmail().withMessage("Please enter a valid email address"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be at least 3 characters long"),

],
userController.register
);



module.exports = router;