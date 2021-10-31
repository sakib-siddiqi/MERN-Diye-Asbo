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
    /**
     * connect client
     */
    await client.connect();
    /**
     * db and collection
     */
    const DB_diye_asbo = client.db("Diye-asbo");
    const Services = DB_diye_asbo.collection("Services");
    const AllBookings = DB_diye_asbo.collection("AllBookings");
    /**
     * get Service
     */
    app.get("/services", async (req, res) => {
      const result = await Services.find({}).toArray();
      res.json(result);
    });
    /**
     * Post Service
     */
    app.post("/services", async (req, res) => {
      const serviceData = req.body;
      const result = await Services.insertOne(serviceData);
      res.json(result);
    });
    /**
     * Post Bookings
     */
    app.post("/bookings", async (req, res) => {
      const BookingsData = req.body;
      const result = await AllBookings.insertOne(BookingsData);
      res.json(result);
    });
    /**
     * get Bookings
     */
    app.get("/bookings", async (req, res) => {
      const result = await AllBookings.find({}).toArray();
      res.json(result);
    });
    /**
     *  update
     */
    app.put("/bookings", async (req, res) => {
      const id = req.body.id;
      const query = { _id: ObjectId(id) };
      const updateed = { $set: { status: "aproved" } };
      const result = await AllBookings.updateOne(query, updateed);
      res.json(result);
    });
    /**
     *  getOne
     */
    app.get("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await AllBookings.findOne(query);
      res.json(result);
    });
    /**
     *  delete One
     */
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await AllBookings.deleteOne(query);
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
})();
app.get("/", (req, res) => res.send("server live"));
app.listen(port, () => console.log("running"));
