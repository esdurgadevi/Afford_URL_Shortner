
export const isValidUrl = (url) =>{
    try{
        const parseurl = new URL(url);
        return parseurl.protocol === 'http:' || parseurl.protocol === 'https:';
    }
    catch(error)
    {
        return false;
    }
}