
export const isValidUrl = (url) =>{
    try{
        const parseurl = new URL(url);
        return parseurl === 'http:' || parseurl === 'https:';
    }
    catch(error)
    {
        return false;
    }
}