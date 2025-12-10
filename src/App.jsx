import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Componant/Navbar/Navbar/Navbar";
import About from "./Padgs/Home/About/About";
import Contact from "./Padgs/Home/Contant/Contact";
import Footer from "./Componant/Navbar/Footer/Footer";
import Portfolio from "./Padgs/Home/Portfolio/Portfolio";
import Home from "./Padgs/Home/Home1/Home";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>} />
          <Route />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
