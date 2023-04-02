const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./utils/db");
const showRequests = require("./middlewares/showRequests");
const userRoutes = require("./routes/userRoutes");

const errorMiddleware = require("./middlewares/errorMiddleware");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

// middlewares
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(showRequests);

// routes
app.use("/api/auth", userRoutes);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "pages/home.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "pages/login.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "pages/register.html"));
});

// error middleware
app.use(errorMiddleware);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
