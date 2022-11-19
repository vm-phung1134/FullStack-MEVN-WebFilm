import axios from "axios";
const url = "http://localhost:8081/api/sessions";

export default class APISession{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(Session){
        const res = await axios.post(url,Session);
        return res.data;
    }
    // update
    static async update(id,Session){
        const res = await axios.put(`${url}/${id}`,Session);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}