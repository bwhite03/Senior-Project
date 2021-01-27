const express = require("express");
const router = express.Router();
const Client = require("../models/client.model");

// get all users
router.get("/clients", (req, res) => {
  Client.find({}).exec((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

router.post("/client", (req, res) => {
  const newClient = new Client({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });

  newClient.save((err, client) => {
    if (err) {
      console.log(err);
    } else {
      res.end();
    }
  });
});

module.exports = router;