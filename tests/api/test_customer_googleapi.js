const axios = require("axios");
const assert = require("assert");

const API_BASE = process.env.API_BASE || "http://localhost:3000/api/customer";

const testCases = [
  {
    name: "王小明",
    city: "新竹市",
    address: "新竹市東區光復路二段101號",
    expectCity: "新竹市",
  },
  {
    name: "林美麗",
    city: "台中市",
    address: "台中市西屯區台灣大道三段99號",
    expectCity: "台中市",
  },
];

(async () => {
  for (const tc of testCases) {
    try {
      const res = await axios.post(API_BASE, {
        name: tc.name,
        city: tc.city,
        address: tc.address,
      });
      const data = res.data;
      assert(data.success !== false, "API 回傳失敗");
      assert(data.customer, "缺少 customer 欄位");
      assert(data.customer.city === tc.expectCity, "城市不符");
      assert(
        typeof data.customer.distance_km === "number",
        "distance_km 應為數字"
      );
      assert(
        typeof data.customer.distance_mile === "number",
        "distance_mile 應為數字"
      );
      assert(data.customer.distance_km > 0, "距離應大於 0");
      assert(data.customer.distance_mile > 0, "距離應大於 0");
      console.log(
        `[PASS] ${tc.city} (${tc.address}) 距離台北: ${data.customer.distance_km} km / ${data.customer.distance_mile} mi`
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
