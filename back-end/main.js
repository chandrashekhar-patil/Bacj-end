const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.static(path.join(__dirname,'public')));

const languageData = JSON.parse(fs.readFileSync("languages.json", "utf-8"));

app.get("/hello", (req, res) => {
  const { language } = req.query;

  if (!language) {
    return res.status(400).json({
      error_message: "The 'language' query parameter is required"
    });
  }

  if (!languageData[language]) {
    return res.status(400).json({
      error_message: "The requested language is not supported"
    });
  }

  res.status(200).json(languageData[language]);
});

app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname,"public","./front-end/main.html"))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
