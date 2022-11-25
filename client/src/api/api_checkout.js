import axios from "axios";
const url = "http://localhost:8081/api/checkouts";

export default class APICheckout{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // insert
    static async create(checkout){
        const res = await axios.post(url,checkout);
        return res.data;
    }
    // update
    static async update(id,checkout){
        const res = await axios.put(`${url}/${id}`,checkout);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}