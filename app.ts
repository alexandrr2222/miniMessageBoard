import path from "node:path";
import express from "express";

const app = express();
const PORT = 8081;

const assetsPath = path.join(import.meta.dirname, "public");
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.send("hah");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}!`);
});
