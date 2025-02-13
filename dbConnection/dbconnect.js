
const mongoose = require("mongoose");
require("dotenv").config();

// Check if DATABASEURL exists in .env file
if (!process.env.DATABASEURL) {
  console.error("DATABASEURL is not defined in the environment variables.");
  process.exit(1); // Exit the process with an error code
}

const mongoURI = process.env.DATABASEURL;

const connection = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connection Successful"))
    .catch((err) =>
      console.error(
        "Failed To Connect With Database, \nReason : " + err.message
      )
    );
};

module.exports = connection;

// const mongoose = require("mongoose");
// require("dotenv").config();
// // let mongoURI = process.env.DATABASEURL;
// const { mongoURI } = process.env.DATABASEURL;

// const connection = () => {
//   mongoose
//     .connect("mongoURI")
//     .then(() => console.log("Database Connection Successfull"))
//     .catch((err) =>
//       console.log("Failed To Connect With Database, \nReason : " + err.message)
//     );
// };

// module.exports = connection;
