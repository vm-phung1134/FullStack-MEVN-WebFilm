import axios from "axios";
const url = "http://localhost:8081/api/films";

export default class API{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
    static async findOne(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async findName(name){
        const res = await axios.get(`${url}/${name}`);
        return res.data;
    }
    // insert
    static async create(film){
        const res = await axios.post(url,film);
        return res.data;
    }
    // update
    static async update(id,film){
        const res = await axios.put(`${url}/${id}`,film);
        return res.data;
    }
    static async delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}