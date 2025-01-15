const captainModel = require("../models/captainModel");
const captainServices = require("../services/captainServices");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const existedCaptain = await captainModel.find({email}); 
    if(!existedCaptain){
        return res.status(400).json({message:"captain user already exist for this email"});
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = captainServices.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(200).json({ message: "captain is created", token, captain });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
