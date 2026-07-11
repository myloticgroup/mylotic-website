import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop.jsx/ScrollToTop";




export default function App() {
  return (
    <>
      <img
        src={"/background.png"}
        alt=""
        className="fixed inset-0 -z-10 h-screen w-screen object-cover"
      />

      <BrowserRouter>
      <ScrollToTop/>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services/>} />
              <Route path="/training" element={<Training/>} />
                            <Route path="/contact" element={<Contact/>} />


        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  );
}