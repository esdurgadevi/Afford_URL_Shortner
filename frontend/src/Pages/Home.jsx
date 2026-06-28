import { Link } from "react-router-dom";

function Home()
{
    return <>
       <h1>URL Shortner</h1>
       <nav className="nav-bar">
            <Link to="/view-url">View Urls</Link>
            <Link to="/short-url">Short Urls</Link>
       </nav>
    </>
}

export default Home;