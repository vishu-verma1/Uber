const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./db/db");

const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");
const mapRoutes = require("./routes/mapRoutes");
const rideRoutes = require("./routes/rideRoutes");
const cookieParser = require("cookie-parser");

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);
app.use("/map", mapRoutes);
app.use("/ride", rideRoutes);

module.exports = app;
