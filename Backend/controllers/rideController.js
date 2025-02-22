const { validationResult } = require("express-validator");
const rideServices = require("../services/rideServices");

module.exports.createRide = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {pickup, destination, vehicleType } = req.body;

    const ride = await rideServices.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(200).json(ride);
  } catch (error) {
    res.status(404).json({ message: "internal Server Error" });
  }
};
