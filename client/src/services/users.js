import instance from "../utils/axios";
import { APIs } from "../constants";

export const login=(payload)=>{
    return instance.post(APIs.USERS+"/login",payload)
};

export const register=(payload)=>{
    return instance.post(APIs.USERS+"/register",payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
          },
    });
};

export const generateFPToken=(payload)=>{
     return instance.post(APIs.USERS+"/generate-fp-token",payload); 
 };

 export const verifyFPToken=(payload)=>{
    return instance.post(APIs.USERS+"/verify-fp-token",payload); 
};
