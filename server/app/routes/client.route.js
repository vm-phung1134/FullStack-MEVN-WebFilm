const express = require("express");
const clients = require("../controllers/client.controllers");
const router = express.Router();
router
    .route("/")
    .get(clients.findAll)
    .post(clients.create)
router
    .route("/:id")
    .get(clients.findOne)
    .put(clients.update)
    .delete(clients.delete);

module.exports = router;