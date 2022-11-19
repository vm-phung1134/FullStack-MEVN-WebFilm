const express = require("express");
const cinemas = require("../controllers/cinema.controllers");
const router = express.Router();
router
    .route("/")
    .get(cinemas.findAll)
    .post(cinemas.create)
router
    .route("/:id")
    .get(cinemas.findOne)
    .put(cinemas.update)
    .delete(cinemas.delete);

module.exports = router;