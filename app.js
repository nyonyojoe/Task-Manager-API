const express = require("express");

const tasks = require("./routes/tasks");
const connectBD = require("./db/connect");
require("dotenv").config();

//middleware
const app = express();
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectBD(process.env.MONGO_URI_LOCAL);
    console.log("DB connection successful");
    app.listen(port, console.log(`Server is running on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
