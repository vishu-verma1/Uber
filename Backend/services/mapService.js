const axios = require("axios");

module.exports.getAddressCoordinates = async (address) => {
  const apiKey = "Google Api Key" || process.env.GOOGLE_MAP_API_KEY;
  const url =
    "https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"; // have to give address in the url when u have real api
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.result[0].geometry.location;
      return {
        ltd: location.ltd,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error("error", error);
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("All feild are required");
  }

  const apiKey = "Google Api Key" || process.env.GOOGLE_MAP_API_KEY;
  const url =
    "https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"; // have to give origin and coordinates in the url when u have real api
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0] === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time ");
    }
  } catch (error) {
    console.error("error", error);
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!origin) {
    throw new Error("Query required");
  }

  const apiKey = "Google Api Key" || process.env.GOOGLE_MAP_API_KEY;
  const url =
    "https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"; // have to give input in the url when u have real api
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch Suggestions ");
    }
  } catch (error) {
    console.error("error", error);
  }
};
