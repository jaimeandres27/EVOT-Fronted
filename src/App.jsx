import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diplomas from "./pages/Diplomas";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/search/diploma" element={<Diplomas />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
