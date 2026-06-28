import axios from "axios";
import urlCache from "../utils/store.js";
import { logger } from "../utils/loggers.js";

export const urlShortService = async (data)=>{
    if(urlCache.has(data.url))
    {
        logger("Cache","Short url from cache");
        return {
            source : "cache",
            data : urlCache.get(data.url)
        };
    }

    const result = await axios.post(
        `${process.env.BASE_URL}/create`,
        data,
        {
            headers : {
                Authorization : `Bearer ${process.env.TOKEN}`,
                "Content-Type" : "application/json"
            }
        }
    )
    urlCache.set(data.url,result.data);
    return {
        source : "api",
        data : result.data
    };
}

export const getUrlService = async (domain,alias)=>{
    const result = await axios.get(
        `${process.env.BASE_URL}/alias/${domain}/${alias}`,
        {
            headers : {
                Authorization : `Bearer ${process.env.TOKEN}`,
                "Content-Type" : "application/json"
            }
        }
    )
    return result.data;
}