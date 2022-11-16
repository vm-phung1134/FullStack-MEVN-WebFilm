import axios from "axios";
const url = "http://localhost:8081/api/event/";

export default class APIEvent{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(event){
        const res = await axios.post(url,event);
        return res.data;
    }
    // update
    static async update(id,event){
        const res = await axios.put(`${url}/${id}`,event);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}