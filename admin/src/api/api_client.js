import axios from "axios";
const url = "http://localhost:8081/api/clients";

export default class APIClient{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(client){
        const res = await axios.post(url,client);
        return res.data;
    }
    // update
    static async update(id,client){
        const res = await axios.put(`${url}/${id}`,client);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}