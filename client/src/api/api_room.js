import axios from "axios";
const url = "http://localhost:8081/api/rooms";

export default class APIRoom{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(room){
        const res = await axios.post(url,room);
        return res.data;
    }
    // update
    static async update(id,room){
        const res = await axios.put(`${url}/${id}`,room);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}