import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ success: true, message: "API server is running." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
