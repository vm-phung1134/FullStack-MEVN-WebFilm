const { ObjectId } = require("mongodb");

class SeatModel {
    constructor(client) {
        this.seat = client.db().collection("seats");
    }

    extractConactData(payload) {
        const seat = {
            name: payload.name,
            status: payload.status
        };

        // remove undefined fields
        Object.keys(seat).forEach(
            (key) => seat[key] === undefined && delete seat[key]
        );

        return seat;
    }

    async create(payload) {
        const seat = this.extractConactData(payload);
        const result = await this.seat.findOneAndUpdate(
            seat,
            { $set: { favorite: seat.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.seat.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.seat.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.seat.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.seat.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.seat.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = SeatModel;