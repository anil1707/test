const express = require("express");
const connectDb = require("./db");
const cors = require("cors");
const post = require("./model/CreatePost");
const User = require("./model/User");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT || 5050;

connectDb();
app.use(cors({ origin: 'https://test-server-iejg.onrender.com', credentials: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is started...");
});

app.post("/upload", async (req, res) => {
  console.log(req.body.data);
  const collection = await post({ file: req.body.data });
  let result = await collection.save();
  res.send({ message: "uploaded successfully!", data: result });
});

app.get("/getPhoto", async (req, res) => {
  const result = await post.find();

  res.send(result);
});

app.post("/sign-up", async (req, res) => {
  try {
    let { email, password, confirmPassword } = req.body;
    console.log(req.body);
    const userExist = await User.find({ email });
    if (password !== confirmPassword)
      return res.send({
        message: "Password and confirm password is not matched!",
      });
    if (userExist.length > 0)
      return res.send({ message: "User already Exist, please login" });
    const collection = await User({ email, password, confirmPassword });
    const result = await collection.save();
    res.send({ message: "Registred Successfully!", data: result });
  } catch (error) {
    console.log(error)
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("Something went wrong");
    return;
  }
  console.log("server is running on port http://locolhost", port);
});
