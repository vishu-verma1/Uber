const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captainController")
const { body, query } = require("express-validator");
const captainAuthMiddleware = require("../middlewares/captainAuthMiddleware")

router.post("/register", [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name should be at least 3 characters long"),

    body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Plate number must be at least 3 "),

    body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be at least 1"),
],

captainController.registerCaptain

);

router.post("/login",[ body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters long"),
], captainController.loginCaptain)

router.get("/profile", captainAuthMiddleware.isLoginCaptain, captainController.getCaptainProfile );


module.exports = router;
