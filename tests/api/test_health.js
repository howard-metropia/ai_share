const axios = require("axios");

(async () => {
  try {
    const res = await axios.get("http://localhost:3000/health");
    if (res.data && res.data.success) {
      console.log("[PASS] /health 回應:", res.data);
    } else {
      console.error("[FAIL] /health 回應格式錯誤:", res.data);
      process.exit(1);
    }
  } catch (err) {
    console.error("[FAIL] 無法連線到 API:", err.message);
    process.exit(1);
  }
})();
