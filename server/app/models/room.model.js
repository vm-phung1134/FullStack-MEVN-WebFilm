const { ObjectId } = require("mongodb");

class RoomModel {
    constructor(client) {
        this.room = client.db().collection("rooms");
    }

    extractConactData(payload) {
        const room = {
            name: payload.name,
            quantity: payload.quantity,
            status: payload.status
        };

        // remove undefined fields
        Object.keys(room).forEach(
            (key) => room[key] === undefined && delete room[key]
        );

        return room;
    }

    async create(payload) {
        const room = this.extractConactData(payload);
        const result = await this.room.findOneAndUpdate(
            room,
            { $set: { favorite: room.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.room.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.room.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.room.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.room.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.room.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = RoomModel;