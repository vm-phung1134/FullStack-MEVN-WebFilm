const { ObjectId } = require("mongodb");

class ComboModel {
    constructor(client) {
        this.combo = client.db().collection("combos");
    }

    extractConactData(payload) {
        const combo = {
            name: payload.name,
            price: payload.price,
            img: payload.img,
            title: payload.title
        };

        // remove undefined fields
        Object.keys(combo).forEach(
            (key) => combo[key] === undefined && delete combo[key]
        );

        return combo;
    }

    async create(payload) {
        const combo = this.extractConactData(payload);
        const result = await this.combo.findOneAndUpdate(
            combo,
            { $set: { favorite: combo.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.combo.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.combo.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.combo.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.combo.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.combo.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ComboModel;