const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
// Import routes

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
require("./config/db")();

// Routes
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
    console.log(`🚀 Server running at http://0.0.0.0:${PORT}`)
);
