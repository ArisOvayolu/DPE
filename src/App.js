import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import DPT from "./DPT";
import Contact from "./contact";
import EDP from "./EDP";
import Facebook from "./Pages/Facebook";
import Google from "./Pages/Google";
import Amazon from "./Pages/Amazon";
import About from "./About";
import Feedback from "./Feedback";
import Footer from "./components/Footer";
import Completed from "./completed";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/DarkPatternTechniques" element={<DPT />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ExposeTheDarkPatterns" element={<EDP />} />
          <Route path="/ExposeTheDarkPatterns/Facebook" element={<Facebook />} />
          <Route path="/ExposeTheDarkPatterns/Google" element={<Google />} />
          <Route path="/ExposeTheDarkPatterns/Amazon" element={<Amazon />} />
          <Route path="/About" element = {<About/>} />
          <Route path="/Feedback" element = {<Feedback/>} />
          <Route path="/ExposeTheDarkPatterns/Completed" element = {<Completed/>} />
          <Route path='*' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    
    </>
  );
}

export default App;
