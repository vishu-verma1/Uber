const rideModel = require("../models/rideModel");
const mapService = require("./mapService");
const crypto = require('crypto');

async function getFare(pickup, destination) {
  if (!pickup || destination) {
    throw new Error("Pickup and Destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20,
  };
  const perKmRate = {
    auto: 10,
    car: 15,
    motorcycle: 8,
  };
  const perMinutRate = {
    auto: 2,
    car: 3,
    motorcycle: 1.5,
  };

  const fare = {
    auto:
      baseFare.auto +
      (distanceTime.distance.value / 1000) * perKmRate.auto +
      distanceTime.duration.value * perMinutRate.auto,
    car:
      baseFare.car +
      (distanceTime.distance.value / 1000) * perKmRate.car +
      distanceTime.duration.value * perMinutRate.car,
    motorcycle:
      baseFare.motorcycle +
      (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
      distanceTime.duration.value * perMinutRate.motorcycle,
  };

  return fare;
}

function getOtp(num) {
  const otp = crypto
    .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
    .toString();
  return otp;
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  try {
    if (!user || !pickup || !destination || !vehicleType) {
      throw new Error("user, pickup, destination, fare feild are required");
    }
    const fare = getFare(pickup, destination);
    const ride = rideModel.create({
      user,
      pickup,
      destination,
      fare: fare[vehicleType],
      otp: getOtp(4)
    });

    return ride;
  } catch (error) {
    throw new Error(error);
  }
};
