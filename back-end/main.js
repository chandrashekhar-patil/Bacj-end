const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Load language data
const languageFilePath = path.join(__dirname, "languages.json");
if (!fs.existsSync(languageFilePath)) {
  console.error(`Error: languages.json file not found at ${languageFilePath}`);
  process.exit(1);
}
const languageData = JSON.parse(fs.readFileSync(languageFilePath, "utf-8"));

// API endpoint
app.get("/hello", (req, res) => {
  const { language } = req.query;

  if (!language) {
    return res.status(400).json({
      error_message: "The 'language' query parameter is required",
    });
  }

  if (!languageData[language]) {
    return res.status(400).json({
      error_message: "The requested language is not supported",
    });
  }

  res.status(200).json(languageData[language]);
});

app.get("*", (req, res) => {
  const mainHtmlPath = path.join(__dirname, "public", "front-end", "main.html");
  if (!fs.existsSync(mainHtmlPath)) {
    console.error(`Error: main.html file not found at ${mainHtmlPath}`);
    return res.status(404).send("main.html not found.");
  }
  res.sendFile(mainHtmlPath);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
