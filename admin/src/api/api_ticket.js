import axios from "axios";
const url = "http://localhost:8081/api/tickets";

export default class APITicket{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(ticket){
        const res = await axios.post(url,ticket);
        return res.data;
    }
    // update
    static async update(id,ticket){
        const res = await axios.put(`${url}/${id}`,ticket);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}