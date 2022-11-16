const express = require("express");
const filmsExpected = require("../controllers/film.ex.controller");
const router = express.Router();
router
    .route("/")
    .get(filmsExpected.findAll)
    .post(filmsExpected.create)
    .delete(filmsExpected.deleteAll);
router
    .route("/:id")
    .get(filmsExpected.findOne)
    .put(filmsExpected.update)
    .delete(filmsExpected.delete);

module.exports = router;