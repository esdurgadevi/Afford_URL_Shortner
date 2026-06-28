import { useState } from "react";
import axios from "axios";

function ShortUrl()
{
    const [ url,setUrl ] = useState("");
    const [ alias,setAlias ] = useState("");
    const [ response,setResponse ] = useState({}); 
    const getShortUrl = async ()=>{
        try{
            const res = await axios.post
            (
                "http://localhost:5000/api/create",
                {
                    url,
                    alias
                }
            );
            const data = await res.data;
            setResponse(data);
            console.log(response);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return <>
       <h1>Short Url</h1>
       <div className="container">
            <input value={url} onChange={(event)=>setUrl(event.target.value)} placeholder="Enter the URL" />
            <input value={alias} onChange={(event)=>setAlias(event.target.value)} placeholder="Enter the alias you want" />
            <button onClick={()=>getShortUrl()}>Get Short Url</button>
            <a href={response.tiny_url} target="_blank">{response.tiny_url}</a>
       </div>
       <br></br>
    </>
}
export default ShortUrl;