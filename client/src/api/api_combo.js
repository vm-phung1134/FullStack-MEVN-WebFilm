import axios from "axios";
const url = "http://localhost:8081/api/combos";

export default class APIcombo{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(combo){
        const res = await axios.post(url,combo);
        return res.data;
    }
    // update
    static async update(id,combo){
        const res = await axios.put(`${url}/${id}`,combo);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}