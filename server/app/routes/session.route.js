const express = require("express");
const sessions = require("../controllers/session.controllers");
const router = express.Router();
router
    .route("/")
    .get(sessions.findAll)
    .post(sessions.create)
    .delete(sessions.deleteAll);
router
    .route("/:id")
    .get(sessions.findOne)
    .put(sessions.update)
    .delete(sessions.delete);

module.exports = router;