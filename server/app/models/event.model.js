const { ObjectId } = require("mongodb");

class EventModel {
    constructor(client) {
        this.event = client.db().collection("events");
    }

    extractConactData(payload) {
        const event = {
            title: payload.title,
            img: payload.img,
            maincontent: payload.maincontent,
            content1: payload.content1,
            content2: payload.content2,
            img2: payload.img2
        };

        // remove undefined fields
        Object.keys(event).forEach(
            (key) => event[key] === undefined && delete event[key]
        );

        return event;
    }

    async create(payload) {
        const event = this.extractConactData(payload);
        const result = await this.event.findOneAndUpdate(
            event,
            { $set: { favorite: event.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.event.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.event.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.event.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.event.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.event.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = EventModel;