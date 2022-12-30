import axios from "axios";
import BaseUrl from "../config/BaseUrl";
import { AuthToken } from "./Token";

export const PostRequset = async (urls,values)=> {
    return await axios ({
    method: 'Post',
    url: `${BaseUrl.url}/${urls}`,
    headers: { 
        'Authorization':`Bearer ${AuthToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data :values
    })
};

export const GetRequset = async (urls) =>{
    return await axios ({
        method: 'Get',
        url: `${BaseUrl.url}/${urls}`,
        headers: { 
            'Authorization':`Bearer ${AuthToken()}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
      });
}



export const PatchRequset = async (urls,values)=> {
    return await axios ({
    method: 'Patch',
    url: `${BaseUrl.url}/${urls}`,
    headers: { 
        'Authorization':`Bearer ${AuthToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data :values
    })
};

