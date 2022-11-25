const { ObjectId } = require("mongodb");

class CheckoutModel {
    constructor(client) {
        this.checkout = client.db().collection("checkouts");
    }

    extractConactData(payload) {
        const checkout = {
            name: payload.name,
            image: payload.image,
        };

        // remove undefined fields
        Object.keys(checkout).forEach(
            (key) => checkout[key] === undefined && delete checkout[key]
        );

        return checkout;
    }

    async create(payload) {
        const checkout = this.extractConactData(payload);
        const result = await this.checkout.findOneAndUpdate(
            checkout,
            { $set: { favorite: checkout.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.checkout.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.checkout.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.checkout.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.checkout.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports = CheckoutModel;