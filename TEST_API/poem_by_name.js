const axios = require("axios");
require("dotenv").config({ path: __dirname + "/.env" });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("請在 .env 檔案中設定 OPENAI_API_KEY");
  process.exit(1);
}

const name = process.argv[2];
if (!name) {
  console.error("請在指令後輸入中文名字，例如：node poem_by_name.js 王阿花");
  process.exit(1);
}

async function generatePoem(name) {
  const prompt = `請以「${name}」為主題，寫一首四句短詩，內容溫暖有畫面感，使用繁體中文。`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          { role: "system", content: "你是一位詩人。" },
          { role: "user", content: prompt },
        ],
        max_tokens: 120,
        temperature: 0.8,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const poem = response.data.choices[0].message.content.trim();
    console.log(`\n${name} 的詩：\n${poem}\n`);
  } catch (error) {
    console.error("API 錯誤：", error.response?.data || error.message);
  }
}

generatePoem(name);
