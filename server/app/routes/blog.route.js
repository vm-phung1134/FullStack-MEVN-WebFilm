const express = require("express");
const blogs = require("../controllers/blog.controllers");
const router = express.Router();
router
    .route("/")
    .get(blogs.findAll)
    .post(blogs.create)
    .delete(blogs.deleteAll);
router
    .route("/:id")
    .get(blogs.findOne)
    .put(blogs.update)
    .delete(blogs.delete);

module.exports = router;