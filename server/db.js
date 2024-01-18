
const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config();

const connectDb = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI
    )
    .then(() => {
      console.log("db connected successfully!");
    })
    .catch((error) => {
      console.log("Connection Error", error);
    });
};

module.exports = connectDb;
