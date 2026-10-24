import path from "node:path";
import express from "express";
import { indexRouter } from "./routes/indexRouter";

const app = express();
const PORT = process.env.PORT || 8081;

const assetsPath = path.join(import.meta.dirname, "..", "public");
app.set("views", path.join(import.meta.dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// after setup

app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${PORT}!`);
});
