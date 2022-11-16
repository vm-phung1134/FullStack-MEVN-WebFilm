const express = require("express");
const events = require("../controllers/event.controllers");
const router = express.Router();
router
    .route("/")
    .get(events.findAll)
    .post(events.create)
    .delete(events.deleteAll);
router
    .route("/:id")
    .get(events.findOne)
    .put(events.update)
    .delete(events.delete);

module.exports = router;