import { logger } from "../utils/loggers.js"
import { urlShortService,getUrlService } from "../services/urlService.js";

export const urlShortController = async (req,res)=>{
    try {
        const response = await urlShortService(req.body);
        logger("Success","URL Shorted successfully");
        return res.status(201).json(response);
    }
    catch(error)
    {
        logger("Error",error.message);
        return res.status(500).json({
            "success" : "false",
            "message" : error.message
        })
    }
}

export const getUrls = async (req,res)=>{
    try{
        const response = await getUrlService(req.params.domain,req.params.alias);
        console.log(req.params);
        logger("Success","Url get successfully");
        return res.status(200).json(response);
    }
    catch(error){
        logger("Error",error.message);
        return res.status(500).json({
            "success" : "false",
            "message" : error.message
        })
    }
}