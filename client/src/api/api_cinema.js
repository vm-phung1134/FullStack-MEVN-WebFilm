import axios from "axios";
const url = "http://localhost:8081/api/cinemas";

export default class APICinema{
    static async findAll(){
        const res = await axios.get(url);
        return res.data;
    }
}