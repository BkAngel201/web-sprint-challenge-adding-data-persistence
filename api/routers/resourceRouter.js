const express = require("express");

const router = express.Router();

const Actions = require("../data-model");

router.get("/", (req, res) => {
  Actions.getResources()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.post("/", validateBody, (req, res) => {
  Actions.insertResources(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.get("/:id/projects/", (req, res) => {
  const { id } = req.params;
  Actions.projectsUsingResource(id)
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
    res.status(400).json({ message: "Missing Resource data" });
  } else {
    if (body.name) {
      next();
    } else {
      res.status(400).json({ message: "Missing required Name field" });
    }
  }
}

module.exports = router;
