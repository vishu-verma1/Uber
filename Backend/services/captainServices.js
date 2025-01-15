const captainModel = require("../models/captainModel");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  password,
  email,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !vehicleType ||
    !capacity
  ) {
    throw new Error("All field are require");
  }

  const captain = captainModel.create({
    fullname: { firstname, lastname },
    password,
    email,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};

