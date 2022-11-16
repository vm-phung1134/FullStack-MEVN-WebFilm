const { ObjectId } = require("mongodb");

class TicketModel {
    constructor(client) {
        this.ticket = client.db().collection("tickets");
    }

    extractConactData(payload) {
        const ticket = {
            title: payload.title,
            cinema: payload.cinema,
            date: payload.date,
            hour: payload.hour,
            combo: payload.combo,
            seat: payload.seat,
            subtotal: payload.subtotal,
            username: payload.username
        };

        // remove undefined fields
        Object.keys(ticket).forEach(
            (key) => ticket[key] === undefined && delete ticket[key]
        );

        return ticket;
    }

    async create(payload) {
        const ticket = this.extractConactData(payload);
        const result = await this.ticket.findOneAndUpdate(
            ticket,
            { $set: { favorite: ticket.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.ticket.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.ticket.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.ticket.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.ticket.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.ticket.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = TicketModel;