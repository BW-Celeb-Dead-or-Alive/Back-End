const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const usersRouter = require("./users/usersRouter");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Server is up and running");
});

module.exports = server;
