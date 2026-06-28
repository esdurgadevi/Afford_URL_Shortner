import { useState,useEffect } from "react";
import axios from"axios";
function Urls()
{
    const [ urls,setUrls ] = useState({});
    const [ domain,setDomain ] = useState(); 
    const [ alias,setAlias ] = useState(); 
    var [ flag,setFlag ] = useState(false);

    const fetchUrls = async () =>{
        try{
            const response = await axios.get(`http://localhost:5000/api/${domain}/${alias}`);
            const data = await response.data;
            setUrls(data);
            setFlag(true);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const getUrls = ()=>{
        fetchUrls();
    }

    return <>
       <h1>Shorted Urls Details</h1>
       <div className="container">
            <input value={domain} onChange={(event)=>setDomain(event.target.value)} placeholder="Enter the domain" />
            <input value={alias} onChange={(event)=>setAlias(event.target.value)} placeholder="Enter the alias" />
            <button onClick={()=>getUrls()}>Submit</button>
            {
                flag && 
                (
                    <div>
                        <p><strong style={{color:"purple"}}>Domain : </strong>{urls.domain}</p>
                        <strong style={{color:"purple"}}>Short Url : </strong><a href={urls.tiny_url} target="_blank">{urls.tiny_url}</a>
                        <p><strong style={{color:"purple"}}>Original Url : </strong>{urls.url}</p>
                        <p><strong style={{color:"purple"}}>User Email : </strong>{urls.user?.email}</p>
                    </div>
                )
            }
       </div>
    </>
}

export default Urls;