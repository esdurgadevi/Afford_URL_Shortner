import { createTinyUrlService } from "../services/urlService.js"; 
import { logger } from "../utils/loggers.js"

export const createTinyUrl = async (req,res)=>{
    try{
        const response = await createTinyUrlService(req.body);

        return res.status(200).json(response);
    }
    catch(e)
    {
        logger("Error","Error shortening the url");
        return res.status(500).json(
            {
                "success" : "false",
                "message":e.message
            }
        )
    }
}