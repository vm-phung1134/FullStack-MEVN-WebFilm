import axios from "axios";
const url = "http://localhost:8081/api/seats";

export default class APISeat{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(seat){
        const res = await axios.post(url,seat);
        return res.data;
    }
    // update
    static async update(id,seat){
        const res = await axios.put(`${url}/${id}`,seat);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}