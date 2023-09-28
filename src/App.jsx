import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diplomas from "./pages/Diplomas";
import About from "./pages/About";
import Team from "./pages/Team";
import Partners from "./pages/Partners";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/search/diploma" element={<Diplomas />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
