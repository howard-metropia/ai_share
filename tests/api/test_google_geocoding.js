const fs = require("fs");
const path = require("path");
const axios = require("axios");
const assert = require("assert");

// 嘗試讀取 .env 檔案
let GOOGLE_API_KEY = "";
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/^GOOGLE_API_KEY=(.*)$/m);
  if (match) {
    GOOGLE_API_KEY = match[1].trim();
  }
}
if (!GOOGLE_API_KEY) {
  GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
}
if (!GOOGLE_API_KEY) {
  throw new Error("請於 tests/api/.env 檔案或環境變數設置 GOOGLE_API_KEY");
}

const TAIPEI = { lat: 25.0478, lng: 121.517 };

const testCases = [
  {
    city: "新竹市",
    address: "新竹市東區光復路二段101號",
  },
  {
    city: "台中市",
    address: "台中市西屯區台灣大道三段99號",
  },
];

function haversine(lat1, lng1, lat2, lng2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // 地球半徑 (公里)
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

(async () => {
  for (const tc of testCases) {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        tc.address
      )}&key=${GOOGLE_API_KEY}`;
      const res = await axios.get(url);
      assert(res.data.status === "OK", `Geocoding 失敗: ${res.data.status}`);
      const loc = res.data.results[0].geometry.location;
      const distKm = haversine(loc.lat, loc.lng, TAIPEI.lat, TAIPEI.lng);
      const distMi = distKm * 0.621371;
      console.log(
        `[PASS] ${tc.city} (${tc.address}) => (${loc.lat},${
          loc.lng
        }) 距離台北: ${distKm.toFixed(2)} km / ${distMi.toFixed(2)} mi`
      );
    } catch (err) {
      if (err.response) {
        console.error(`[FAIL] ${tc.city} (${tc.address})`, err.response.data);
      } else {
        console.error(`[FAIL] ${tc.city} (${tc.address})`, err.message);
      }
    }
  }
})();
