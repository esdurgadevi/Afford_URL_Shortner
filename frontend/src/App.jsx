import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Urls from "./Pages/Urls.jsx"
import ShortUrl from "./Pages/ShortUrl.jsx"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/view-url" element = {<Urls />} />
        <Route path="/short-url" element = {<ShortUrl />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
