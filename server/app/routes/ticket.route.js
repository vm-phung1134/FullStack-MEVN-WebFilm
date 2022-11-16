const express = require("express");
const tickets = require("../controllers/ticket.controllers");
const router = express.Router();
router
    .route("/")
    .get(tickets.findAll)
    .post(tickets.create)
    .delete(tickets.deleteAll);
router
    .route("/:id")
    .get(tickets.findOne)
    .put(tickets.update)
    .delete(tickets.delete);

module.exports = router;