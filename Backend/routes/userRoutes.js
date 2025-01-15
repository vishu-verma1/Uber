const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const userController = require('../controllers/userController');
const userAuth = require("../middlewares/userAuthMiddleware")

router.post("/register",[
    body('email').isEmail().withMessage("Please enter a valid email address"),
    body('password').isLength({min:6}).withMessage("Password should be at least 6 characters long"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be at least 3 characters long"),

],
userController.register
);



router.post("/login",[
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password").isLength({min:6}).withMessage("Password should at least 6 character long ")
],userController.loginUser)



router.get("/profile", userAuth.isLogin, userController.getUserProfile)

router.get("/logout",userAuth.isLogin, userController.logoutUser)



module.exports = router;