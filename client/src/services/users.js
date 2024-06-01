import instance from "../utils/axios";
import { APIs } from "../constants";

export const login=(payload)=>{
    return instance.post(APIs.USERS+"/login",payload)
};