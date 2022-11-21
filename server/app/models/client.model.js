const { ObjectId } = require("mongodb");

class ClientModel {
    constructor(client) {
        this.client = client.db().collection("clients");
    }

    extractConactData(payload) {
        const client = {
            username : payload.username,
            password : payload.password,
            email : payload.email
        };

        // remove undefined fields
        Object.keys(client).forEach(
            (key) => client[key] === undefined && delete client[key]
        );

        return client;
    }

    async create(payload) {
        const client = this.extractConactData(payload);
        const result = await this.client.findOneAndUpdate(
            client,
            { $set: { favorite: client.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.client.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.client.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.client.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.client.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports = ClientModel;