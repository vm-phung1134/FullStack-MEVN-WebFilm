const { ObjectId } = require("mongodb");

class FilmModel {
    constructor(client) {
        this.film = client.db().collection("films");
    }

    extractConactData(payload) {
        const film = {
            title: payload.title,
            image: payload.image,
            plot: payload.plot,
            country: payload.country,
            type: payload.type,
            director: payload.director,
            actors: payload.actors,
            name: payload.name,
            duration: payload.duration,
            date: payload.date,
            year: payload.year,
            favorite: payload.favorite,
        };

        // remove undefined fields
        Object.keys(film).forEach(
            (key) => film[key] === undefined && delete film[key]
        );

        return film;
    }

    async create(payload) {
        const film = this.extractConactData(payload);
        const result = await this.film.findOneAndUpdate(
            film,
            { $set: { favorite: film.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.film.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.film.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.film.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.film.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.film.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = FilmModel;