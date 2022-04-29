import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import DPT from "./DPT";
import Contact from "./contact";
import EDP from "./EDP";
import Facebook from "./Pages/Facebook";
import Google from "./Pages/Google";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/DarkPatternTechniques" element={<DPT />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ExposeTheDarkPatterns" element={<EDP />} />
          <Route path="/ExposeTheDarkPatterns/Facebook" element={<Facebook />} />
          <Route path="/ExposeTheDarkPatterns/Google" element={<Google />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
