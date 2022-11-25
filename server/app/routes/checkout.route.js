const express = require("express");
const checkouts = require("../controllers/checkout.controllers");
const router = express.Router();
router
    .route("/")
    .get(checkouts.findAll)
    .post(checkouts.create)
    .delete(checkouts.deleteAll);
router
    .route("/:id")
    .get(checkouts.findOne)
    .put(checkouts.update)
    .delete(checkouts.delete);

module.exports = router;