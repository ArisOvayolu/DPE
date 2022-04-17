import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from './Landing';
import DPT from "./DPT";
import Contact from "./contact";
import EDP from "./EDP";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/DarkPatternTechniques" element={<DPT/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/ExposeTheDarkPatterns" element={<EDP/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
