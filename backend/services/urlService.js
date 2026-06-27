import axios from "axios";

export const urlShortService = async (data)=>{
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
    return result.data;
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