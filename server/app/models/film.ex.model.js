const { ObjectId } = require("mongodb");

class FilmExpectedModel {
    constructor(client) {
        this.filmExpected = client.db().collection("films-expected");
    }

    extractConactData(payload) {
        const filmExpected = {
            title: payload.title,
            image: payload.image,
            plot: payload.plot,
            country: payload.country,
            type: payload.type,
            director: payload.director,
            actors: payload.actors,
            name: payload.name,
            date: payload.date,
            favorite: payload.favorite,
            trailer: payload.trailer,
        };

        // remove undefined fields
        Object.keys(filmExpected).forEach(
            (key) => filmExpected[key] === undefined && delete filmExpected[key]
        );

        return filmExpected;
    }

    async create(payload) {
        const filmExpected = this.extractConactData(payload);
        const result = await this.filmExpected.findOneAndUpdate(
            filmExpected,
            { $set: { favorite: filmExpected.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.filmExpected.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.filmExpected.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.filmExpected.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.filmExpected.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.filmExpected.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = FilmExpectedModel;