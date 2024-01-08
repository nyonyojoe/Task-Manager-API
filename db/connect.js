const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;

const connectBD = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
};

module.exports = connectBD;
