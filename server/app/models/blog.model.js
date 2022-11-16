const { ObjectId } = require("mongodb");

class BlogModel {
    constructor(client) {
        this.blog = client.db().collection("blogs");
    }

    extractConactData(payload) {
        const blog = {
            title: payload.title,
            image: payload.image,
            image2: payload.image2,
            maincontent: payload.maincontent,
            content1: payload.content1,
            content2: payload.content2,
            like: payload.like,
            seen: payload.seen,
            tags: payload.tags,
        };

        // remove undefined fields
        Object.keys(blog).forEach(
            (key) => blog[key] === undefined && delete blog[key]
        );

        return blog;
    }

    async create(payload) {
        const blog = this.extractConactData(payload);
        const result = await this.blog.findOneAndUpdate(
            blog,
            { $set: { favorite: blog.favorite === true } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.blog.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" }, // $options: 'i' để dùng không phân biệt hoa thường
        });
    }

    async findById(id) {
        return await this.blog.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };

        const update = this.extractConactData(payload);
        const result = await this.blog.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );

        return result.value;
    }

    async delete(id) {
        const result = await this.blog.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.blog.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = BlogModel;