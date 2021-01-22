const express = require("express");

const server = express();

const AdoptersRouter = require("./adopters/adopters-router");
const DogsRouter = require("./dogs/dogs-router");

server.use(express.json());

server.use("/api/adopters", AdoptersRouter);
server.use("/api/dogs", DogsRouter);

// const Dog = require("./dogs/dogs-model");x

// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS

// server.use("api/dogs");
// server.get("/api/dogs", (req, res) => {
//   Dog.find()
//     .then((dogs) => {
//       res.status(200).json(dogs);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({
//         message: "Error retrieving the dogs",
//       });
//     });
// });

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
