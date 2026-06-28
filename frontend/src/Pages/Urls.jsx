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

       <input value={domain} onChange={(event)=>setDomain(event.target.value)} />
       <input value={alias} onChange={(event)=>setAlias(event.target.value)} />

       <button onClick={()=>getUrls()}>Submit</button>
       {
           flag && (
             <ul>
                <li>{urls.domain}</li>
                <li>{urls.tiny_url}</li>
                <li>{urls.url}</li>
                <li>{urls.user?.email}</li>
            </ul>
           )
       }
    </>
}

export default Urls;