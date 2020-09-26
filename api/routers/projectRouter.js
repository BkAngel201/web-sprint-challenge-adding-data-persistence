const express = require("express");

const router = express.Router();

const Actions = require("../data-model");
const { response } = require("../server");

router.get("/", (req, res) => {
  Actions.getProjects()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.post("/", validateBody, (req, res) => {
  Actions.insertProject(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.get("/:id/resources/", (req, res) => {
  const { id } = req.params;
  Actions.projectResources(id)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.get("/:id/tasks/", (req, res) => {
  const { id } = req.params;
  Actions.projectTasks(id)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

// Middleware Functions

function validateBody(req, res, next) {
  const body = req.body;
  if (!body || body === {}) {
    res.status(400).json({ message: "Missing Project data" });
  } else {
    if (body.name) {
      next();
    } else {
      res.status(400).json({ message: "Missing required Name field" });
    }
  }
}

module.exports = router;
