
import axios from "axios";
import { logger } from "../utils/loggers.js"

export const createTinyUrlService = async (data)=>{
    logger("Request","Url shorting request received");
    const response = await axios.post(
        `${process.env.BASE_URL}/create`,
        data,
        {
            headers : {
                Authorization : `Bearer ${process.env.TOKEN}`,
                "Content-Type" : "application/json"
            }
        }
    )
    logger("Complete","Url is shortened successfully");
    return response.data;
}