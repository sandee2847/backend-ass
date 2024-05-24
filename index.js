require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.MONGO_URI;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((error) => {
    console.log("error", error.message);
  });

// import route
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

app.use("/api", userRoutes);
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
