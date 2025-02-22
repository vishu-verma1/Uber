const express = require("express")
const router = express.Router();
const userAuthMiddleware = require("../middlewares/userAuthMiddleware")
const {body} = require('express-validator');
const rideController = require('../controllers/rideController');


router.post('/create',
    userAuthMiddleware.isLogin,
    body('pickup').isString().isLength({min:3}).withMessage("invalid pickup address"),
    body('destination').isString().isLength({min:3}).withMessage("invalid destination address"),
    body('vehicleType').isString().isIn(['auto','car','mototcycle']).withMessage("invalid vehicle type"),
    rideController.createRide
)

module.exports = router;