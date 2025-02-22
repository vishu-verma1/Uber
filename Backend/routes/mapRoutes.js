const express = require("express")
const router = express.Router();
const userAuth = require("../middlewares/userAuthMiddleware")
const {query} = require('express-validator');
const mapController = require('../controllers/mapController');



router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    userAuth.isLogin,
    mapController.getCoordinates
)

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    userAuth.isLogin,
    mapController.getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    userAuth.isLogin,
    mapController.getAutoCompleteSuggestions
)


module.exports = router;