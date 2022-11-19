const { ObjectId } = require("mongodb");

class CinemaModel {
    constructor(client) {
        this.cinema = client.db().collection("cinemas");
    }

    extractConactData(payload) {
        const cinema = {
            name: payload.name,
        };

        // remove undefined fields
        Object.keys(cinema).forEach(
            (key) => cinema[key] === undefined && delete cinema[key]
        );

        return cinema;
    }

    async create(payload) {
        const cinema = this.extractConactData(payload);
        const result = await this.cinema.findOneAndUpdate(
            cinema,
            { $set: { favorite: cinema.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.cinema.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.cinema.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.cinema.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.cinema.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports = CinemaModel;