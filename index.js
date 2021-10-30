const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
/**
 * MIDDLE WARE
 */
app.use(cors());
app.use(express.json());
// ----------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLIENT_URL}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
(async function () {
  try {
  } catch (err) {}
})();
app.get("/", (req, res) => res.send("server live now"));
app.listen(port, () => console.log("running"));
