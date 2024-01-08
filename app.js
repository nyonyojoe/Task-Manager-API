const express = require("express");

const tasks = require("./routes/tasks");
const connectBD = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandlerMidleware");
require("dotenv").config();

//middleware
const app = express();
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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
