const { validationResult } = require("express-validator");
const mapServices = require("../services/mapService");

module.exports.getCoordinates = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;

    const coordinates = await mapServices.getAddressCoordinates(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};

module.exports.getDistanceTime = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { origin, destination } = req.query;

    const distanceTime = await mapServices.getDistanceTime(origin, destination);
    res.status(200).json(distanceTime);
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};


module.exports.getAutoCompleteSuggestions = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {input} = req.query;
  
      const suggestions = await mapServices.getAutoCompleteSuggestions(input);
      res.status(200).json(suggestions);
    } catch (error) {
      res.status(404).json({ message: "internal Server Error" });
    }
  };