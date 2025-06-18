const axios = require("axios");
require("dotenv").config({ path: __dirname + "/.env" }); // Load environment variables from .env in script directory

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const ORIGIN = "Boston";
const DESTINATION = "San Francisco";

async function getDistance() {
  if (!GOOGLE_API_KEY) {
    console.error("Error: GOOGLE_API_KEY is not set in .env file.");
    return;
  }

  const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
    ORIGIN
  )}&destination=${encodeURIComponent(DESTINATION)}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.status === "OK" && data.routes.length > 0) {
      const leg = data.routes[0].legs[0];
      const distance = leg.distance.text;
      const duration = leg.duration.text;
      console.log(`距離從 ${ORIGIN} 到 ${DESTINATION}:`);
      console.log(`距離: ${distance}`);
      console.log(`時間: ${duration}`);
    } else {
      console.error(`Error: ${data.status}`);
      if (data.error_message) {
        console.error(`Message: ${data.error_message}`);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

getDistance();
