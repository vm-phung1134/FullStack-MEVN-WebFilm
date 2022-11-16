import axios from "axios";
const url = "http://localhost:8081/api/cinema-blog/";

export default class APIBlog{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(blog){
        const res = await axios.post(url,blog);
        return res.data;
    }
    // update
    static async update(id,blog){
        const res = await axios.put(`${url}/${id}`,blog);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}