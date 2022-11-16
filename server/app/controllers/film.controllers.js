const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
const FilmModel = require("../models/film.model");

// Create and Save a new Contact
exports.create = async (req, res, next) => {
    if (!req.body?.title) {
        return next(new ApiError(400, "Title cannot be empty"));
    }
    try {
        const filmModel = new FilmModel(MongoDB.client);
        const document = await filmModel.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

// Retrieve all contacts of a user from the database
exports.findAll = async (req, res, next) => {
    let documents = [];

    try {
        const filmModel = new FilmModel(MongoDB.client);
        const { title } = req.query;

        if (title) {
            documents = await filmModel.findByName(title);
        } else {
            documents = await filmModel.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }

    return res.send(documents);
};

// Find a single contact with an id
exports.findOne = async (req, res, next) => {
    try {
        const filmModel = new FilmModel(MongoDB.client);
        const document = await filmModel.findById(req.params.id);

        if (!document) {
            return next(new ApiError(404, "film not found"));
        }

        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving film with id=${req.params.id}`
            )
        );
    }
};
exports.findName = async (req, res, next) => {
    try {
        const filmModel = new FilmModel(MongoDB.client);
        const document = await filmModel.findByName(req.params.name);
        if (!document) {
            return next(new ApiError(404, "film not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving film with id=${req.params.name}`
            )
        );
    }
};

// Update a contact by the i in the request
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update cannot be empty"));
    }

    try {
        const filmModel = new FilmModel(MongoDB.client);
        const document = await filmModel.update(req.params.id, req.body);

        if (!document) {
            return next(new ApiError(404, "film not found"));
        }

        return res.send({ message: "film was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating film with id=${req.params.id}`)
        );
    }
};

// Delete a contact ưith the specified id in the request
exports.delete = async (req, res, next) => {
    try {
        const filmModel = new FilmModel(MongoDB.client);
        const document = await filmModel.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "film not found"));
        }

        return res.send({ message: "film was deleted succussfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.param.id}`
            )
        );
    }
};

exports.deleteAll = async (req, res, next) => {
    try {
        const filmModel = new FilmModel(MongoDB.client);
        const deletedCount = await filmModel.deleteAll();
        return res.send({
            message: `${deletedCount} contacts were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while removing all contacts")
        );
    }
};
