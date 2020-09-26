const express = require("express");

const router = express.Router();

const Actions = require("../data-model");

router.get("/project/:id", validateProjectId, (req, res) => {
  const { id } = req.params;
  Actions.getTask(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error processing query", error: err });
    });
});

router.post("/project/:id", validateBody, validateProjectId, (req, res) => {
  const { id } = req.params;
  Actions.insertTask(req.body, id)
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
    if (body.description) {
      next();
    } else {
      res.status(400).json({ message: "Missing required Description field" });
    }
  }
}

function validateProjectId(req, res, next) {
  const { id } = req.params;
  Actions.verifyProjectId(id)
    .then((response) => {
      if (response.length === 0) {
        res
          .status(400)
          .json({ message: "The account with that ID do not exist in the DB" });
      } else {
        next();
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Error handling data info", error: err });
    });
}

module.exports = router;
