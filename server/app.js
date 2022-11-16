const express = require("express");
const cors = require("cors");
const filmsRouter = require("./app/routes/film.route");
const cinemaBlog = require("./app/routes/blog.route");
const ticketsRouter = require("./app/routes/ticket.route");
const filmsExpected = require("./app/routes/film.ex.route");
const eventsRouter = require("./app/routes/event.route");

const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/films", filmsRouter);
app.use("/api/tickets", ticketsRouter);
app.use("/api/films-expected", filmsExpected);
app.use("/api/cinema-blog", cinemaBlog);
app.use("/api/event", eventsRouter);

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use()and routes calls
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
app.listen(process.env.PORT || 8081)
module.exports = app;