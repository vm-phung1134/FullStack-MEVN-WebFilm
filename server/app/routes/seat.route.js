const express = require("express");
const seats = require("../controllers/seat.controllers");
const router = express.Router();
router
    .route("/")
    .get(seats.findAll)
    .post(seats.create)
    .delete(seats.deleteAll);
router
    .route("/:id")
    .get(seats.findOne)
    .put(seats.update)
    .delete(seats.delete);

module.exports = router;