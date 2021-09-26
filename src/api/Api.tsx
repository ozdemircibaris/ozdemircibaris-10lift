import axios from "axios";

export class Api {

    async get (url:string){
        let res = await axios.get(url)
        return res.data
    }

}