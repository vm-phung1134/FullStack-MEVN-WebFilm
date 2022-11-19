const { ObjectId } = require("mongodb");

class SessionModel {
    constructor(client) {
        this.session = client.db().collection("sessions");
    }

    extractConactData(payload) {
        const session = {
            date:payload.dates,
            type:payload.type,
        };

        // remove undefined fields
        Object.keys(session).forEach(
            (key) => session[key] === undefined && delete session[key]
        );

        return session;
    }

    async create(payload) {
        const session = this.extractConactData(payload);
        const result = await this.session.findOneAndUpdate(
            session,
            { $set: { favorite: session.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.session.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.session.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.session.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.session.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.session.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = SessionModel;