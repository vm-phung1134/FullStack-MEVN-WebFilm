const express = require("express");
const films = require("../controllers/film.controllers");
const router = express.Router();
router
    .route("/")
    .get(films.findAll)
    .post(films.create)
    .delete(films.deleteAll);
router
    .route("/:id")
    .get(films.findOne)
    .put(films.update)
    .delete(films.delete);
router
    .route("/:name")
    .get(films.findName);

module.exports = router;