import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Templates/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Templates/Footer";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import './/Components/Assets/Css/Theme.css';
import './/Components/Assets/Css/Responsive.css';
import Register from "./Components/Templates/Register";
import Shop from "./Components/Shop";
import ScrollToTop from "./Components/ScrollToTop";
import ProductDetail from "./Components/ProductDetail";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="test-demo" onLoad={() => setLoading(false)}>
      <div style={{ display: loading ? "block" : "none" }} className="loader-app">
        <Spinner animation="border" role="status" className="loader">
        </Spinner>
      </div>
      <BrowserRouter>
        <Menu />
        <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-detail" element={<ProductDetail />} />         
        </Routes>
        <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
