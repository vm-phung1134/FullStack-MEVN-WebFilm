const express = require("express");
const combos = require("../controllers/combo.controllers");
const router = express.Router();
router
    .route("/")
    .get(combos.findAll)
    .post(combos.create)
    .delete(combos.deleteAll);
router
    .route("/:id")
    .get(combos.findOne)
    .put(combos.update)
    .delete(combos.delete);

module.exports = router;