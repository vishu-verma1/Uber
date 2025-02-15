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

    const existedCaptain = await captainModel.find({ email });
    if (!existedCaptain) {
      return res
        .status(400)
        .json({ message: "captain user already exist for this email" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainServices.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken()
    res.status(200).json({ message: "captain is created", token, captain });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.loginCaptain = async (req, res) => {
  try {
   
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);
    
    if (!isMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.status(200).json({ token, captain, message: "you are logedin" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain, message: "profile" });
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authrization.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out" });
};
