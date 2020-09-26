const express = require("express");

const projectRouter = require("./routers/projectRouter");
const resourceRouter = require("./routers/resourceRouter");
const taskRouter = require("./routers/taskRouter");

const server = express();

server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server;
